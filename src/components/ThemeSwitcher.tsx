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
import { useState } from "react";
import { Palette } from "lucide-react";

function ThemeSwitcher() {
  const [selectedTheme, setSelectedTheme] = useState<string | undefined>(
    undefined,
  );

  return (
    <Card className="h-full pt-4">
      <CardContent className="flex h-full flex-col gap-1 space-y-2 p-4 pt-0">
        <Select value={selectedTheme} onValueChange={setSelectedTheme}>
          <SelectTrigger className="!text-[0.82rem]">
            <SelectValue placeholder="Select a Theme" />
          </SelectTrigger>

          <SelectContent className="max-h-44">
            <SelectGroup>
              <SelectLabel>Themes</SelectLabel>
              <SelectItem value="vs-light">Visual Studio Light</SelectItem>
              <SelectItem value="vs-dark">Visual Studio Dark</SelectItem>
              <SelectItem value="dracula">Dracula Theme</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {selectedTheme ? (
          <>
            <div className="flex text-xs">
              <span className="flex-1 underline">Created By:</span>
              <a href="#" className="ml-1 font-normal hover:font-bold">
                @EL_Ouardy
              </a>
            </div>
            <Separator />
            <div className="flex flex-1 flex-col justify-between gap-2">
              <div className="text-xs">
                <div className="mb-1 underline">Description:</div>
                <div className="line-clamp-4 cursor-pointer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda quos labore commodi dolorum tenetur sunt eligendi
                  enim fugit omnis velit, temporibus odit nam, harum, beatae
                  vitae inventore nostrum facilis neque!
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
          <div className="flex h-full items-center justify-center">
            <Palette className="size-16 text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ThemeSwitcher;
