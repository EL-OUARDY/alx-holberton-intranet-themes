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
    background: string;
  };
}

export interface IThemesList {
  id: string;
  name: string;
  filename: string;
}
