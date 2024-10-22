import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useEffect, useState } from "react";
import { getAvailableThemes } from "@/lib/utils";
import { IThemesList } from "@/models/Theme";
import { useContentTheme } from "@/contexts/ContentThemeProvider";
import ThemePalette from "./ThemePalette";

function ThemeSwitcher() {
  const { activeTheme, changeTheme } = useContentTheme();
  const [themesList, setThemeslist] = useState<IThemesList[]>([]);

  useEffect(() => {
    getAvailableThemes()
      .then((result) => {
        result.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        setThemeslist(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function onThemeChange(id: string) {
    const filename = themesList.find((theme) => theme.id == id)?.filename;
    changeTheme(filename as string);
  }

  return (
    <Card className="h-full pt-4">
      <CardContent className="flex h-full flex-col gap-1 space-y-2 p-4 pt-0">
        <Select onValueChange={onThemeChange} value={activeTheme?.id}>
          <SelectTrigger>
            <SelectValue placeholder="Select a Theme" />
          </SelectTrigger>

          <SelectContent className="max-h-44">
            <SelectGroup>
              <SelectLabel>Themes</SelectLabel>
              {themesList?.map((theme) => (
                <SelectItem
                  className="cursor-pointer"
                  key={theme.id}
                  value={theme.id}
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {activeTheme ? (
          <>
            <div className="flex text-xs">
              <span className="flex-1 underline">Created By:</span>
              <a
                href={activeTheme?.author.github}
                target="_blank"
                className="ml-1 font-normal hover:font-bold"
              >
                @{activeTheme?.author.name.replace(/ /g, "_")}
              </a>
            </div>
            <Separator />
            <div className="flex flex-1 flex-col justify-between gap-2">
              <div className="text-xs">
                <div className="mb-1 underline">Description:</div>
                <div className="line-clamp-4 cursor-pointer">
                  {activeTheme?.description}
                </div>
              </div>
              <div>
                <div className="mb-1 text-xs underline">Theme Palette:</div>

                <ThemePalette theme={activeTheme} />
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg border">
            <img className="size-28" src="./logo.svg" alt="logo" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ThemeSwitcher;
