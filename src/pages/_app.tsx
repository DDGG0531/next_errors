import "@/styles/globals.css";
import type { AppProps } from "next/app";
import errorCases from "../errorCases";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import page_names from "../page_names.json";
import { Toaster } from "@/components/ui/toaster";
import { AxiosContext, useInitAxios } from "@/hooks/useAxios";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function App({ Component, pageProps, router }: AppProps) {
  const currentPageName = router.route.split("/")[1];
  const useErrorCaseStructure = currentPageName in errorCases;

  const filtered = ["_app", "_document", "_error", "index", "api"];

  const filteredPageNames = [
    ...page_names.filter((pageName) => !filtered.includes(pageName)),
    "",
  ];

  const { instance } = useInitAxios();

  return (
    <>
      <AxiosContext.Provider value={instance}>
        <div className="min-h-screen flex flex-col items-center p-5">
          <Select
            defaultValue={currentPageName}
            onValueChange={(v) => router.push(v)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              {filteredPageNames.map((pageName) => (
                <SelectItem key={pageName} value={pageName}>
                  {pageName == "" ? "Home" : pageName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {useErrorCaseStructure ? (
            <div className="p-5">
              <div className="grid gap-4 w-[500px]">
                <Alert>
                  <AlertTitle>{currentPageName}</AlertTitle>
                  <AlertDescription>
                    {(errorCases as any)[currentPageName]}
                  </AlertDescription>
                </Alert>

                <Component {...pageProps} />
              </div>
            </div>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
      </AxiosContext.Provider>
      <Toaster />
    </>
  );
}
