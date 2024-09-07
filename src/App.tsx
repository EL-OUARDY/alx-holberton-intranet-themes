import "./App.css";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/theme-toggle";
import { ThemeProvider } from "./contexts/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id="ext-popup">
        <ModeToggle />
        <h1 className="text-3xl text-purple-500">Hello, World!</h1>
        <Button>Click Me!</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
