import type { ITheme } from "./Theme";

declare global {
  interface IState {
    isEnabled: boolean;
    isFocusModeEnabled: boolean;
    fontSize: number;
    codeFontSize: number;
    activeTheme: ITheme;
  }
}

// make this file a module
export {};
