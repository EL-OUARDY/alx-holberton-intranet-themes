export interface ITheme {
  id: string;
  name: string;
  description: string;
  mode: "dark" | "light";
  author: {
    name: string;
    twitter: string;
    github: string;
  };
  colors: {
    "primary-background": string;
    "secondary-background": string;
    "muted-background": string;
    "primary-foreground": "#fff";
    "secondary-foreground": string;
    "muted-foreground": string;
    primary: string;
    "primary-accent": string;
    secondary: string;
    info: string;
    success: string;
    destructive: string;
    border: string;
    "code-background": string;
    "code-foreground": string;
    "primary-button": string;
    "primary-button-hover": string;
    "success-button": string;
    "success-button-hover": string;
    "secondary-button": string;
    "secondary-button-hover": string;
    "destructive-button": string;
    "destructive-button-hover": string;
    "user-text-select-color": string;
    "user-text-select-background": string;
  };
  settings: {
    "logo-width": "60px";
    "logo-height": "60px";
  };
}

export interface IThemesList {
  id: string;
  name: string;
  filename: string;
}
