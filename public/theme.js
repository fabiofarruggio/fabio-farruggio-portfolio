(function () {
  var storageKey = 'fabio-portfolio-theme';
  var root = document.documentElement;
  var storedTheme = null;

  try {
    storedTheme = window.localStorage.getItem(storageKey);
  } catch (error) {
    storedTheme = null;
  }

  var initialTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';

  function updateToggle(theme) {
    var isDark = theme === 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.setAttribute('aria-checked', String(isDark));
      button.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
      var label = button.querySelector('[data-theme-label]');
      if (label) label.textContent = isDark ? 'Oscuro' : 'Claro';
    });
  }

  function setTheme(theme, persist) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (persist) {
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch (error) {
        // Theme changes remain available when storage is unavailable.
      }
    }
    updateToggle(theme);
  }

  setTheme(initialTheme, false);

  document.addEventListener('DOMContentLoaded', function () {
    updateToggle(root.dataset.theme || initialTheme);
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        var nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme, true);
      });
    });
  });
})();
