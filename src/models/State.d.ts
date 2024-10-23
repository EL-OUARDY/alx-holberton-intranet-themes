import type { ITheme } from "./Theme";

declare global {
  interface IState {
    isEnabled: boolean;
    isFocusModeEnabled: boolean;
    activeTheme: ITheme;
  }
}

// make this file a module
export {};
