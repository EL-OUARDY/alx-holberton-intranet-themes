// This is a compiled file from @src/content.ts

import type { IState } from "./models/State";

const root = document.documentElement;
// Load selected theme
// chrome.storage.local.get(["state"], function (result) {
//   if (result.state) {
//     if (result.state.isEnabled) document.body.classList.add("intanet-themes");
//     root.style.setProperty("--background", result.state.backgroundColor);
//   }
// });

// listen for theme change
chrome.storage.onChanged.addListener(function (changes) {
  console.log(changes);
  const theme: IState = changes.state.newValue;
  // check if extension is enabled
  if (theme.isEnabled) document.body.classList.add("intanet-themes");
  else document.body.classList.remove("intanet-themes");

  // apply theme colors
  root.style.setProperty("--background", theme.activeTheme.colors.background);
});
