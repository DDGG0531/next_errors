import { createContext, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";
import axios, { isAxiosError, AxiosInstance } from "axios";
import * as Sentry from "@sentry/nextjs";

// @ts-ignore
export const AxiosContext = createContext<AxiosInstance>(null);

export function useInitAxios() {
  const { toast } = useToast();
  const instance = useMemo(() => {
    const i = axios.create({
      baseURL: "/",
    });
    i.interceptors.response.use(
      (res) => {
        return Promise.resolve(res);
      },
      (error) => {
        if (isAxiosError(error)) {
          const httpStatusCode = error.response?.status;
          const customErrorCode = error.response?.data?.code;
          const message = error.response?.data?.message;

          const __manuallyHandler__ =
            error.config?.headers.__manuallyHandler__ || [];

          // 針對呼叫端指定的錯誤代碼，不做處理
          if (__manuallyHandler__.includes(httpStatusCode)) {
            return Promise.reject(error);
          }

          toast({
            title: `錯誤編號: ${httpStatusCode}`,
            description: `錯誤內容: ${message}`,
          });

          // Sentry.captureException(error);
          // 下面這樣寫：比較好看出錯誤點
          Sentry.captureException(new Error(`${httpStatusCode}: ${message}`));

          return Promise.reject(error);
        }
      }
    );

    return i;
  }, [toast]);

  return {
    instance,
  };
}
