import { useContentTheme } from "@/contexts/ContentThemeProvider";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { RotateCcwIcon } from "lucide-react";

function Customize() {
  const {
    toggleFocusMode,
    isFocusModeEnabled,
    fontSize,
    codeFontSize,
    changeFontSize,
    changeCodeFontSize,
  } = useContentTheme();

  return (
    <div className="flex h-full flex-col justify-between rounded-lg border p-4">
      <div className="rounded-lg border p-2">
        <div className="mb-1 flex">
          <div className="space-y-0.5">
            <label className="text-xs">Focus Mode</label>
          </div>
          <div className="z-10 ml-auto flex">
            <Switch
              checked={isFocusModeEnabled}
              onCheckedChange={toggleFocusMode}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Hides all distractions (headers, sidebars, notifications ..etc) so
          students can concentrate solely on their current task.
        </p>
      </div>
      <div className="rounded-lg border p-2">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label>Font Size</label>
            <div className="flex-1">
              <RotateCcwIcon
                onClick={() => changeFontSize(14)}
                className="ml-auto size-3 text-muted-foreground hover:text-foreground"
              />
            </div>
            <span className="rounded-md border border-transparent py-0.5 pl-2 text-right text-sm text-muted-foreground">
              {fontSize}
            </span>
          </div>
          <Slider
            value={[fontSize]}
            onValueChange={(values) => changeFontSize(values[0])}
            max={30}
            min={10}
            step={1}
            className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
            aria-label="font-size"
          />
        </div>
      </div>
      <div className="rounded-lg border p-2">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label>Code Font Size</label>
            <div className="flex-1">
              <RotateCcwIcon
                onClick={() => changeCodeFontSize(14)}
                className="ml-auto size-3 text-muted-foreground hover:text-foreground"
              />
            </div>
            <span className="rounded-md border border-transparent py-0.5 pl-2 text-right text-sm text-muted-foreground">
              {codeFontSize}
            </span>
          </div>
          <Slider
            value={[codeFontSize]}
            onValueChange={(values) => changeCodeFontSize(values[0])}
            max={30}
            min={10}
            step={1}
            className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
            aria-label="code-font-size"
          />
        </div>
      </div>
    </div>
  );
}

export default Customize;
