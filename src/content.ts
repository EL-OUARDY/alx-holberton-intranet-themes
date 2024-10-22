// Do NOT modify the generated content.js file directly!
// Any changes should be made in the TypeScript source file (@src/content.ts)

const root = document.documentElement;

// load active theme from chrome storage
chrome.storage.local.get(["state"], function (result) {
  const state: IState = result.state;
  if (state) {
    // apply theme colors
    applyTheme(state);
  }
});

// listen for theme change
chrome.storage.onChanged.addListener(function (changes) {
  const state: IState = changes.state.newValue;
  // apply theme colors
  applyTheme(state);
});

function applyTheme(state: IState) {
  // check if extension is enabled
  if (state.isEnabled) {
    document.documentElement.classList.add("intanet-themes");
  } else document.documentElement.classList.remove("intanet-themes");

  // add colors as CSS varibales
  const colors: { [key: string]: string } = state.activeTheme.colors;
  for (const key in colors) {
    if (Object.prototype.hasOwnProperty.call(colors, key)) {
      root.style.setProperty(`--${key}`, colors[key]);
    }
  }
  // add settings
  const settings: { [key: string]: string } = state.activeTheme.settings;
  for (const key in settings) {
    if (Object.prototype.hasOwnProperty.call(settings, key)) {
      root.style.setProperty(`--${key}`, settings[key]);
    }
  }
  // handle dark/light themes
  if (state.activeTheme.mode == "dark") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
  const filterInvert = state.activeTheme.mode == "dark" ? "1" : "0";
  root.style.setProperty("--logo-filter-invert", filterInvert);

  // Apply code highlighting
  // First, check if there's an existing code theme and remove it
  const existingLink = document.getElementById("intranet-code-theme");
  if (existingLink) {
    existingLink.remove();
  }
  const link = document.createElement("link");
  link.id = "intranet-code-theme";
  link.rel = "stylesheet";
  link.href =
    state.activeTheme.mode == "dark"
      ? chrome.runtime.getURL("/content/code-dark.css")
      : chrome.runtime.getURL("/content/code.css");
  document.head.appendChild(link);
  if (state.isEnabled) {
    hljs.highlightAll();
  }
}
