import React, { ReactNode, useContext, useEffect, useState } from "react";
import { ITheme } from "@/models/Theme";
import { getTheme } from "@/lib/utils";
import { usePopupTheme } from "./PopupThemeProvider";

interface IContentThemeContext {
  isEnabled: boolean;
  toggleExtension: (newState: boolean) => void;
  isFocusModeEnabled: boolean;
  toggleFocusMode: (newState: boolean) => void;
  activeTheme: ITheme | undefined;
  changeTheme: (filename: string) => void;
  fontSize: number;
  changeFontSize: (newSize: number) => void;
  codeFontSize: number;
  changeCodeFontSize: (newSize: number) => void;
}

const ContentThemeContext = React.createContext<IContentThemeContext>(
  {} as IContentThemeContext,
);

// Custom hook to expose the ContentThemeContext
export function useContentTheme() {
  return useContext(ContentThemeContext);
}

interface Props {
  children: ReactNode;
}

export function ContentThemeProvider({ children }: Props) {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [isFocusModeEnabled, setIsFocusModeEnabled] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(14);
  const [codeFontSize, setCodeFontSize] = useState<number>(14);
  const [activeTheme, setActiveTheme] = useState<ITheme | undefined>();

  const { setPopupTheme } = usePopupTheme();

  useEffect(() => {
    // get activated theme from chrom storage
    chrome.storage.local.get(["state"], function (result) {
      const state: IState = result.state;
      if (state) {
        setIsEnabled(state.isEnabled);
        setIsFocusModeEnabled(state.isFocusModeEnabled);
        setActiveTheme(state.activeTheme);
        setFontSize(state.fontSize);
        setCodeFontSize(state.codeFontSize);
      }
    });
  }, []);

  function toggleExtension(newState: boolean) {
    setIsEnabled(newState);
    const state: IState = {
      isEnabled: newState,
      isFocusModeEnabled,
      fontSize,
      codeFontSize,
      activeTheme: activeTheme as ITheme,
    };
    chrome.storage.local.set({ state }, function () {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log(`Extension turned ${isEnabled ? "ON" : "OFF"}`);
      }
    });
  }

  function toggleFocusMode(newState: boolean) {
    setIsFocusModeEnabled(newState);
    const state: IState = {
      isEnabled,
      isFocusModeEnabled: newState,
      fontSize,
      codeFontSize,
      activeTheme: activeTheme as ITheme,
    };
    chrome.storage.local.set({ state }, function () {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log(`Focus mode turned ${isFocusModeEnabled ? "ON" : "OFF"}`);
      }
    });
  }

  function changeFontSize(newSize: number) {
    setFontSize(newSize);
    const state: IState = {
      isEnabled,
      isFocusModeEnabled,
      fontSize: newSize,
      codeFontSize,
      activeTheme: activeTheme as ITheme,
    };
    chrome.storage.local.set({ state }, function () {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log(`Font size set to ${newSize}px`);
      }
    });
  }

  function changeCodeFontSize(newSize: number) {
    setCodeFontSize(newSize);
    const state: IState = {
      isEnabled,
      isFocusModeEnabled,
      fontSize,
      codeFontSize: newSize,
      activeTheme: activeTheme as ITheme,
    };
    chrome.storage.local.set({ state }, function () {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log(`Code font size set to ${newSize}px`);
      }
    });
  }

  function changeTheme(filename: string) {
    // get theme from json file
    getTheme(filename)
      .then((theme) => {
        setActiveTheme(theme);
        setPopupTheme(theme.mode);
        setIsEnabled(true);
        const state: IState = {
          isEnabled: true,
          isFocusModeEnabled,
          fontSize,
          codeFontSize,
          activeTheme: theme,
        };
        chrome.storage.local.set({ state }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
          } else {
            console.log("Theme changed:", theme.name);
          }
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <ContentThemeContext.Provider
      value={{
        isEnabled,
        toggleExtension,
        activeTheme,
        changeTheme,
        isFocusModeEnabled,
        toggleFocusMode,
        fontSize,
        changeFontSize,
        codeFontSize,
        changeCodeFontSize,
      }}
    >
      {children}
    </ContentThemeContext.Provider>
  );
}
