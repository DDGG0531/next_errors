import axios, { isAxiosError } from "axios";
import { Button } from "@/components/ui/button";
import * as Sentry from "@sentry/nextjs";
import { useToast } from "@/components/ui/use-toast";

export default function E10() {
  const { toast } = useToast();

  async function handleClick() {
    try {
      const res = await axios.post("/api/e11", {
        name: "Jim",
      });
    } catch (error) {
      if (isAxiosError(error)) {
        let message = error.response!.data.message;
        let status = error.response?.status;

        toast({
          title: `錯誤編號: ${status}`,
          description: `錯誤內容: ${message}`,
        });

        Sentry.captureException(new Error(`${status}: ${message}`));
      }
    }
  }

  return <Button onClick={handleClick}>Button</Button>;
}
