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
import { useConfig } from "@/contexts/ConfigProvider";

function ThemeSwitcher() {
  const { activeTheme, changeTheme } = useConfig();
  const [themesList, setThemeslist] = useState<IThemesList[]>();

  useEffect(() => {
    getAvailableThemes()
      .then((result) => {
        result.sort((a, b) => a.id - b.id);
        setThemeslist(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Card className="h-full pt-4">
      <CardContent className="flex h-full flex-col gap-1 space-y-2 p-4 pt-0">
        <Select onValueChange={(x) => changeTheme(x)}>
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
                  value={theme.filename}
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
                className="ml-1 font-normal lowercase hover:font-bold"
              >
                @{activeTheme?.author.name}
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
              <div className="text-xs">
                <div className="mb-1 underline">Palette:</div>

                <div className="grid grid-cols-8 rounded-sm">
                  <span className="h-2 bg-red-400"></span>
                  <span className="h-2 bg-blue-400"></span>
                  <span className="h-2 bg-purple-400"></span>
                  <span className="h-2 bg-slate-600"></span>
                  <span className="h-2 bg-yellow-400"></span>
                  <span className="h-2 bg-teal-400"></span>
                  <span className="h-2 bg-pink-500"></span>
                  <span className="h-2 bg-green-400"></span>
                </div>
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
