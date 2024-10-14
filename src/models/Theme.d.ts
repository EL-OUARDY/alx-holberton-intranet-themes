export interface ITheme {
  id: number;
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
  id: number;
  name: string;
  filename: string;
}
