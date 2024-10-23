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
    hljs.configure({ ignoreUnescapedHTML: true });
    hljs.highlightAll();
  }

  // Focus Mode
  if (state.isFocusModeEnabled) {
    document.documentElement.classList.add("focus-mode");
  } else document.documentElement.classList.remove("focus-mode");
}

// Document is ready
document.addEventListener("DOMContentLoaded", function () {
  // create back button when focus mode is on
  createFocusModeControls();
});

function createFocusModeControls() {
  // Create Back Button
  const projectElement = document.querySelector("html.intanet-themes .project");

  if (projectElement) {
    // Create the button element
    const button = document.createElement("button");
    button.className = "btn btn-primary";
    button.id = "back-btn-focus-mode";
    button.title = "Go Back";

    // Create the icon element
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-arrow-left";

    // Append the icon to the button
    button.appendChild(icon);

    // Add the onClick event to go to the previous page
    button.addEventListener("click", function () {
      window.history.back(); // Go back to the previous page
    });

    // Append the button to the target element
    projectElement.appendChild(button);
  }

  // Create Focus Mode Button
  const projectTitleElement = document.querySelector(
    "html.intanet-themes .project>div>h1",
  );
  if (projectTitleElement) {
    // Create the button element
    const button = document.createElement("span");
    button.className = "btn btn-primary";
    button.id = "toggle-focus-mode-btn";
    button.title = "Toggle Focus Mode";

    // Create the icon element
    const icon = document.createElement("i");
    icon.className = "fa-solid";

    // Append the icon to the button
    button.appendChild(icon);

    // Add the onClick event to toggle focus mode class
    button.addEventListener("click", function () {
      root.classList.toggle("focus-mode");
    });

    // Append the button to the target element
    projectTitleElement.appendChild(button);
  }
}
