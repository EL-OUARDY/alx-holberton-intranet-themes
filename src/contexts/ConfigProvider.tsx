import React, { ReactNode, useContext, useState } from "react";
import { ITheme } from "@/models/Theme";
import { getTheme } from "@/lib/utils";

interface IConfigContext {
  isEnabled: boolean;
  toggleExtension: (newState: boolean) => void;
  activeTheme: ITheme | undefined;
  changeTheme: (filename: string) => void;
}

const ConfigContext = React.createContext<IConfigContext>({} as IConfigContext);

// Custom hook to expose the ConfigContext
export function useConfig() {
  return useContext(ConfigContext);
}

interface Props {
  children: ReactNode;
}

export function ConfigProvider({ children }: Props) {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [activeTheme, setActiveTheme] = useState<ITheme | undefined>();

  function toggleExtension(newState: boolean) {
    setIsEnabled(newState);
  }

  function changeTheme(filename: string) {
    // get theme from json file
    getTheme(filename)
      .then((theme) => {
        setActiveTheme(theme);
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
    <ConfigContext.Provider
      value={{
        isEnabled,
        toggleExtension,
        activeTheme,
        changeTheme,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
