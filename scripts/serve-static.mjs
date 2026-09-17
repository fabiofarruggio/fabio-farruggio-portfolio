import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../dist/',import.meta.url));
const base = '/fabio-farruggio-portfolio/';
const types = { '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml' };
const server=createServer(async(request,response)=>{
  try {
    if(request.method!=='GET'&&request.method!=='HEAD') { response.writeHead(405);response.end();return; }
    const pathname=decodeURIComponent((request.url??'').split('?')[0]);
    if(!pathname.startsWith(base)||pathname.includes('\\')||pathname.split('/').includes('..')) { response.writeHead(404);response.end('Not found');return; }
    const suffix=pathname.slice(base.length);
    const destination=resolve(root,suffix.endsWith('/')||!suffix ? `${suffix}index.html` : suffix);
    if(!destination.startsWith(resolve(root)+sep)) throw new Error('Invalid destination');
    if(!(await stat(destination)).isFile()) throw new Error('Not a file');
    response.writeHead(200,{'Content-Type':types[extname(destination)]??'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    response.end(request.method==='HEAD'?undefined:await readFile(destination));
  } catch { response.writeHead(404);response.end('Not found'); }
});
server.listen(4321,'127.0.0.1',()=>console.log(`Local static preview: http://127.0.0.1:4321${base}`));
for(const signal of ['SIGTERM','SIGINT']) process.on(signal,()=>server.close(()=>process.exit(0)));
