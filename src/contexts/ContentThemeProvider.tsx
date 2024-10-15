import React, { ReactNode, useContext, useEffect, useState } from "react";
import { ITheme } from "@/models/Theme";
import { getTheme } from "@/lib/utils";
import { usePopupTheme } from "./PopupThemeProvider";

interface IContentThemeContext {
  isEnabled: boolean;
  toggleExtension: (newState: boolean) => void;
  activeTheme: ITheme | undefined;
  changeTheme: (filename: string) => void;
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
  const [activeTheme, setActiveTheme] = useState<ITheme | undefined>();
  const { setPopupTheme } = usePopupTheme();

  useEffect(() => {
    // get activated theme from chrom storage
    chrome.storage.local.get(["state"], function (result) {
      const state: IState = result.state;
      if (state) {
        setIsEnabled(state.isEnabled);
        setActiveTheme(state.activeTheme);
      }
    });
  }, []);

  function toggleExtension(newState: boolean) {
    setIsEnabled(newState);
    const state: IState = {
      isEnabled: newState,
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

  function changeTheme(filename: string) {
    // get theme from json file
    getTheme(filename)
      .then((theme) => {
        setActiveTheme(theme);
        setPopupTheme(theme.mode);
        setIsEnabled(true);
        const state: IState = { isEnabled: true, activeTheme: theme };
        chrome.storage.local.set({ state }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
          } else {
            console.log("theme changed:", theme.name);
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
      }}
    >
      {children}
    </ContentThemeContext.Provider>
  );
}
