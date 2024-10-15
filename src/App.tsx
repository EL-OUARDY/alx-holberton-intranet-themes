import "./App.css";
import "@fontsource/inter";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Contribute from "./components/Contribute";
import { ContentThemeProvider } from "./contexts/ContentThemeProvider";
import { PopupThemeProvider } from "./contexts/PopupThemeProvider";

function App() {
  return (
    <PopupThemeProvider
      defaultPopupTheme="light"
      storageKey="intranet-popup-ui-theme"
    >
      <ContentThemeProvider>
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
              <TabsContent value="customize" className="flex-1">
                <div className="flex h-full items-center justify-center rounded-lg border">
                  <img className="size-28" src="./logo.svg" alt="logo" />
                </div>
              </TabsContent>
              <TabsContent value="contribute" className="flex-1">
                <Contribute />
              </TabsContent>
            </Tabs>
          </div>
          <div className="bg-secondary p-2">
            <Footer />
          </div>
        </div>
      </ContentThemeProvider>
    </PopupThemeProvider>
  );
}

export default App;
