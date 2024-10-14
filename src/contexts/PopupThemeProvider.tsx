import { createContext, useContext, useEffect, useState } from "react";

type PopupTheme = "dark" | "light" | "system";

type PopupThemeProviderProps = {
  children: React.ReactNode;
  defaultPopupTheme?: PopupTheme;
  storageKey?: string;
};

type PopupThemeProviderState = {
  popupTheme: PopupTheme;
  setPopupTheme: (theme: PopupTheme) => void;
};

const initialState: PopupThemeProviderState = {
  popupTheme: "system",
  setPopupTheme: () => null,
};

const PopupThemeProviderContext =
  createContext<PopupThemeProviderState>(initialState);

export function PopupThemeProvider({
  children,
  defaultPopupTheme = "system",
  storageKey = "intranet-popup-ui-theme",
  ...props
}: PopupThemeProviderProps) {
  const [theme, setTheme] = useState<PopupTheme>(
    () => (localStorage.getItem(storageKey) as PopupTheme) || defaultPopupTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    popupTheme: theme,
    setPopupTheme: (theme: PopupTheme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <PopupThemeProviderContext.Provider {...props} value={value}>
      {children}
    </PopupThemeProviderContext.Provider>
  );
}

export const usePopupTheme = () => {
  const context = useContext(PopupThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a PopupThemeProvider");

  return context;
};
