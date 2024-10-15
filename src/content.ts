// This is an auto-generated file from TypeScript source (@src/content.ts).
// Do NOT edit this file directly.
// Any changes should be made in the TypeScript source file.

const root = document.documentElement;
// load active theme from chrome storage
chrome.storage.local.get(["state"], function (result) {
  const state: IState = result.state;
  if (state) {
    if (state.isEnabled) document.body.classList.add("intanet-themes");
    root.style.setProperty("--background", state.activeTheme.colors.background);
  }
});

// listen for theme change
chrome.storage.onChanged.addListener(function (changes) {
  const theme: IState = changes.state.newValue;
  // check if extension is enabled
  if (theme.isEnabled) document.body.classList.add("intanet-themes");
  else document.body.classList.remove("intanet-themes");

  // apply theme colors
  root.style.setProperty("--background", theme.activeTheme.colors.background);
});
