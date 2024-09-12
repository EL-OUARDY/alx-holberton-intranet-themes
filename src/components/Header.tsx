import { Palette, PanelRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
} from "./ui/sheet";

function Header() {
  return (
    <div className="flex rounded-md border border-input">
      <div className="logo flex flex-1 items-center">
        {/* <img className="size-6" src="./icons/icon128.png" alt="logo" /> */}
        <Button className="size-8 border-none" variant="outline" size="icon">
          <Palette className="size-4" />
        </Button>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="size-8 border-none" variant="outline" size="icon">
            <PanelRight className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[260px]">
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
    </div>
  );
}

export default Header;
