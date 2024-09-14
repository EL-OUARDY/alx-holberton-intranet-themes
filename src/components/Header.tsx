import { Palette, PanelLeft } from "lucide-react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
} from "./ui/sheet";
import { Switch } from "./ui/switch";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <div className="flex h-8 items-center rounded-md border border-input px-2">
      <Sheet>
        <SheetTrigger asChild>
          <PanelLeft className="size-5 cursor-pointer" />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[240px]">
          <SheetHeader>
            <SheetTitle>About</SheetTitle>
          </SheetHeader>
          <div className="mt-1 text-sm text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
            illo exercitationem est possimus quasi assumenda voluptatibus velit
            impedit ipsum fuga quidem in maxime nesciunt incidunt atque vel
            pariatur dolore nihil?
          </div>
        </SheetContent>
      </Sheet>
      <div className="logo flex flex-1 justify-center">
        {/* <img className="size-6" src="./icons/icon128.png" alt="logo" /> */}
        <Palette className="size-5" />
      </div>
      <div className="flex">
        <Switch checked={isActive} onCheckedChange={setIsActive} />
      </div>
    </div>
  );
}

export default Header;
