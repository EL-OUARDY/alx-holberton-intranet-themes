import "./App.css";
import "@fontsource/inter";

import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/theme-toggle";
import { ThemeProvider } from "./contexts/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id="ext-popup">
        <ModeToggle />
        <h1 className="text-2xl text-purple-500">Google</h1>
        <h1 className="text-2xl text-purple-500">Microsoft</h1>
        <h1 className="text-2xl text-purple-500">Facebook</h1>
        <h1 className="text-2xl text-purple-500">Amazon</h1>
        <h1 className="text-2xl text-purple-500">Vercel</h1>
        <h1 className="text-2xl text-purple-500">Twitter</h1>
        <h1 className="text-2xl text-purple-500">Apple</h1>
        <Button>Click Me!</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
