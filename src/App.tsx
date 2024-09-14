import "./App.css";
import "@fontsource/inter";

import { ThemeProvider } from "./contexts/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="intranet-ui-theme">
      <div className="flex h-screen flex-col" id="ext-popup">
        <div className="bg-background p-2 pb-0">
          <Header />
        </div>
        <div className="flex-1 p-2">
          <Tabs defaultValue="themes" className="flex h-full flex-col">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="themes" className="!text-[0.8rem]">
                Themes
              </TabsTrigger>
              <TabsTrigger value="customize" className="!text-[0.8rem]">
                Customize
              </TabsTrigger>
              <TabsTrigger value="contribute" className="!text-[0.8rem]">
                Contribute
              </TabsTrigger>
            </TabsList>
            <TabsContent value="themes" className="flex-1">
              <ThemeSwitcher />
            </TabsContent>
          </Tabs>
        </div>
        <div className="bg-secondary p-2">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
