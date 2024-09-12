import "./App.css";
import "@fontsource/inter";

import { ThemeProvider } from "./contexts/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

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
              <TabsTrigger value="themes">Themes</TabsTrigger>
              <TabsTrigger value="customize">Customize</TabsTrigger>
              <TabsTrigger value="contribute">Contribute</TabsTrigger>
            </TabsList>
            <TabsContent value="themes" className="flex-1">
              <Card className="h-full">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Themes</CardTitle>
                  <CardDescription>Select your favorite theme.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 p-4 pt-0">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Themes</SelectLabel>
                        <SelectItem value="vs-light">
                          Visual Studio Light
                        </SelectItem>
                        <SelectItem value="vs-dark">
                          Visual Studio Dark
                        </SelectItem>
                        <SelectItem value="dracula">Dracula Theme</SelectItem>
                        <SelectItem value="edy">EL_Ouardy Theme</SelectItem>
                        <SelectItem value="classic">Classic Theme</SelectItem>
                        <SelectItem value="Terminal">Terminal Theme</SelectItem>
                        <SelectItem value="Vim">Vim Theme</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
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
