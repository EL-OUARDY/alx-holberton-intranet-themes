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

function Header() {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <div className="relative flex h-8 items-center rounded-md border border-input px-2">
      <Sheet>
        <SheetTrigger asChild>
          <PanelLeft className="z-10 size-5 cursor-pointer" />
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

      <div className="logo absolute left-0 right-0 flex justify-center">
        <img className="size-5" src="./logo.svg" alt="logo" />
      </div>

      <div className="z-10 ml-auto flex">
        <Switch checked={isActive} onCheckedChange={setIsActive} />
      </div>
    </div>
  );
}

export default Header;
