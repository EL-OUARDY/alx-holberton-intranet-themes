import { Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { Input } from "./ui/input";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { EXT_LINK, REPO_LINK, TWITTER_LINK } from "@/shared/constants";

function Footer() {
  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center text-muted-foreground">
      <div className="flex-1 text-xs">
        Version <span className="underline hover:text-primary">1.0.0</span>{" "}
        &copy;
      </div>
      <div className="flex items-center justify-center gap-4">
        <Drawer>
          <DrawerTrigger asChild>
            <svg
              className="size-5 cursor-pointer hover:text-foreground"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
          </DrawerTrigger>

          <DrawerContent>
            <div className="mx-auto w-full max-w-sm py-4">
              <DrawerHeader className="text-left">
                <DrawerDescription className="text-muted-foreground">
                  Share this link with your friends.
                </DrawerDescription>
              </DrawerHeader>

              <DrawerFooter className="pt-0">
                <div className="flex gap-2">
                  <Input
                    className="no-ring text-muted-foreground"
                    value={EXT_LINK}
                    readOnly
                  />
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(EXT_LINK as string);
                      setIsLinkCopied(true);
                      setTimeout(() => setIsLinkCopied(false), 2000);
                    }}
                    variant="secondary"
                    className="shrink-0"
                  >
                    {!isLinkCopied ? (
                      <Copy className="size-5 text-muted-foreground" />
                    ) : (
                      <Check className="size-5 text-muted-foreground" />
                    )}
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={REPO_LINK + "/issues"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="size-5 cursor-pointer hover:text-foreground"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"
                  />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Report a bug</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={REPO_LINK} target="_blank">
                <svg
                  className="size-5 cursor-pointer hover:text-foreground"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
                <svg
                  className="size-[1.1rem] cursor-pointer hover:text-foreground"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Twitter/X</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default Footer;
