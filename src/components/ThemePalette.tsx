import { ITheme } from "@/models/Theme";

interface Props {
  theme: ITheme;
}

function ThemePalette({ theme }: Props) {
  const palette = [
    theme.colors.primary,
    theme.colors.success,
    theme.colors.secondary,
    theme.colors.info,
    theme.colors.destructive,
    theme.colors["muted-foreground"],
    theme.colors.border,
    theme.colors["code-foreground"],
  ];
  return (
    <div className="grid grid-cols-8 rounded-sm">
      {palette.map((color, index) => (
        <span
          className="h-[.5rem]"
          key={index}
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  );
}

export default ThemePalette;
