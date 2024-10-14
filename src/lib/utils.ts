/* eslint-disable @typescript-eslint/no-explicit-any */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ITheme, IThemesList } from "@/models/Theme";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// get available themes from json files located in public/themes directory
export function getAvailableThemes(): Promise<IThemesList[]> {
  return new Promise((resolve, reject) => {
    chrome.runtime.getPackageDirectoryEntry(function (root) {
      root.getDirectory(
        "themes",
        {},
        function (dirEntry) {
          dirEntry.createReader().readEntries(function (entries) {
            const jsonFiles = entries.filter(
              (entry) =>
                entry.isFile &&
                entry.name.endsWith(".json") &&
                entry.name !== "_example.json",
            );

            Promise.all(
              jsonFiles.map(
                (file: any): Promise<IThemesList> =>
                  new Promise((resolveFile, rejectFile) => {
                    file.file(function (fileContent: Blob) {
                      const reader = new FileReader();
                      reader.onloadend = function (event: any) {
                        try {
                          const content = JSON.parse(event.target.result);
                          resolveFile({
                            id: content.id,
                            name: content.name,
                            filename: file.name,
                          });
                        } catch (error) {
                          rejectFile(`Error parsing ${file.name}: ${error}`);
                        }
                      };
                      reader.onerror = function (event: any) {
                        rejectFile(
                          `Error reading ${file.name}: ${event.target.error}`,
                        );
                      };
                      reader.readAsText(fileContent);
                    }, rejectFile);
                  }),
              ),
            )
              .then(resolve)
              .catch(reject);
          });
        },
        reject,
      );
    });
  });
}

// get specific theme
export function getTheme(filename: string): Promise<ITheme> {
  return new Promise((resolve, reject) => {
    chrome.runtime.getPackageDirectoryEntry(function (root) {
      root.getDirectory(
        "themes",
        {},
        function (dirEntry) {
          dirEntry.getFile(
            filename,
            {},
            function (fileEntry) {
              fileEntry.file(
                function (file) {
                  const reader = new FileReader();
                  reader.onloadend = function (event: any) {
                    try {
                      const content = JSON.parse(event.target.result);
                      resolve(content);
                    } catch (error) {
                      reject(`Error parsing ${filename}: ${error}`);
                    }
                  };
                  reader.onerror = function (event: any) {
                    reject(`Error reading ${filename}: ${event.target.error}`);
                  };
                  reader.readAsText(file);
                },
                function (error) {
                  reject(`Error accessing file ${filename}: ${error}`);
                },
              );
            },
            function (error) {
              reject(`Error finding file ${filename}: ${error}`);
            },
          );
        },
        function (error) {
          reject(`Error accessing directory themes: ${error}`);
        },
      );
    });
  });
}
