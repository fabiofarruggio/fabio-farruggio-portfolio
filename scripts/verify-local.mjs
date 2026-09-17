import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../',import.meta.url));
const run = `evidence/local/verified-${new Date().toISOString().replaceAll(':','-')}`;
const output = resolve(root,run); mkdirSync(output,{recursive:true});
const digest = data => createHash('sha256').update(data).digest('hex');
function tree(directory) { return readdirSync(resolve(root,directory),{withFileTypes:true}).flatMap(item => item.isDirectory() ? tree(`${directory}/${item.name}`) : [`${directory}/${item.name}`]); }
const sourceFiles = () => [...['src','public','scripts','tests','.github'].flatMap(tree),'package.json','package-lock.json','astro.config.mjs','tsconfig.json','playwright.config.ts','.gitignore','.gitattributes'].sort();
const files = sourceFiles();
const inventory = paths => paths.map(path => ({path,sha256:digest(readFileSync(resolve(root,path)))}));
const before = inventory(files);
const report = { startedAt:new Date().toISOString(), mode:'offline_replay', executionKind:'real_local_static_site_browser_verification', milestoneAccepted:false, publicationExecuted:false, baselineHead:execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim(), workingTreeDirty:!!execFileSync('git',['status','--porcelain'],{cwd:root,encoding:'utf8'}).trim(), node:process.version, nodeBinarySha256:digest(readFileSync(process.execPath)), sourceBefore:before, commands:[], limitations:['Local Chrome and selected axe rules do not certify complete accessibility.','No remote GitHub Pages deployment, public URL, SaaS or model inference.','Evidence excerpts retain their historical modes and original source identities.'] };
const environment = {...process.env,ASTRO_TELEMETRY_DISABLED:'1',QA_RUN_DIR:run};
function execute(name,args) {
  const result = spawnSync(process.execPath,args,{cwd:root,env:environment,encoding:'utf8',maxBuffer:15_000_000});
  writeFileSync(resolve(output,`${name}.stdout.txt`),result.stdout??''); writeFileSync(resolve(output,`${name}.stderr.txt`),result.stderr??'');
  report.commands.push({name,executable:'node',args,exitCode:result.status,error:result.error?.message??null});
  process.stdout.write(`${name}: exit ${result.status}\n`);
  if(result.status!==0) throw new Error(`${name} failed; see preserved logs`);
}
try {
  execute('astro-check',['node_modules/astro/bin/astro.mjs','check']);
  execute('content-tests',['--test','tests/content.test.mjs']);
  execute('content-validation',['scripts/validate-content.mjs']);
  execute('build',['node_modules/astro/bin/astro.mjs','build']);
  report.distBefore=inventory(tree('dist').sort());
  execute('browser',['node_modules/@playwright/test/cli.js','test']);
  report.distAfter=inventory(tree('dist').sort());
  report.sourceAfter=inventory(sourceFiles());
  if(JSON.stringify(before)!==JSON.stringify(report.sourceAfter)||JSON.stringify(report.distBefore)!==JSON.stringify(report.distAfter)) throw new Error('Source/build bytes changed during verification');
  const browser=JSON.parse(readFileSync(resolve(output,'results.json'),'utf8'));
  report.browserStats=browser.stats;
  if(browser.stats.unexpected||browser.stats.skipped||browser.stats.flaky||browser.stats.expected!==23) throw new Error('Incomplete browser verification');
  report.status='passed'; report.ownedSourceAndBuildUnchanged=true;
} catch(error) { report.status='failed';report.failure=error.message;process.exitCode=1; }
finally {
  report.finishedAt=new Date().toISOString();
  report.artifacts=tree(run).map(path=>({path:relative(output,resolve(root,path)).replaceAll('\\','/'),sha256:digest(readFileSync(resolve(root,path)))}));
  writeFileSync(resolve(output,'verification.json'),`${JSON.stringify(report,null,2)}\n`);
  console.log(`Preserved ${run}/verification.json`);
}
