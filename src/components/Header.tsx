import { PanelLeft } from "lucide-react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
} from "./ui/sheet";
import { Switch } from "./ui/switch";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Separator } from "./ui/separator";

function Header() {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <div className="relative flex h-8 items-center rounded-md border border-input px-2">
      <Sheet>
        <SheetTrigger asChild>
          <PanelLeft className="z-10 size-5 cursor-pointer" />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[240px] !p-4">
          <SheetHeader>
            <SheetTitle>About</SheetTitle>
          </SheetHeader>
          <div className="mt-1 text-[0.76rem] text-muted-foreground">
            <p>
              This Chrome extension was created with love for all ALX Holberton
              students and the community! 🥰 It adds custom themes to the ALX
              intranet platform, including beautiful dark mode themes and a
              collection of other themes to choose from. The goal is to make
              your daily experience on the platform more comfortable and
              visually appealing. You can even contribute your own themes easily
              and share them with everyone!
            </p>
            <Separator className="my-2" />
            <p>Enjoy a more personalized intranet with just a few clicks! ✨</p>
          </div>
          <img
            className="absolute bottom-4 left-4 size-5"
            src="./logo.svg"
            alt="logo"
          />
        </SheetContent>
      </Sheet>

      <div className="logo absolute left-0 right-0 flex justify-center">
        <img className="size-5" src="./logo.svg" alt="logo" />
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="z-10 ml-auto flex">
              <Switch checked={isActive} onCheckedChange={setIsActive} />
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{isActive ? "Turn off" : "Turn on"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Header;
