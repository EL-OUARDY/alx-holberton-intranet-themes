import { useContentTheme } from "@/contexts/ContentThemeProvider";
import { Switch } from "./ui/switch";

function Customize() {
  const { toggleFocusMode, isFocusModeEnabled } = useContentTheme();

  return (
    <div className="h-full rounded-lg border p-4">
      <div className="mb-1 flex">
        <div className="space-y-0.5">
          <label className="text-sm">Focus Mode</label>
        </div>
        <div className="z-10 ml-auto flex">
          <Switch
            checked={isFocusModeEnabled}
            onCheckedChange={toggleFocusMode}
          />
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Hides all distractions (headers, sidebars, menus, notifications ..etc)
        so students can concentrate solely on their current task.
      </p>
    </div>
  );
}

export default Customize;
