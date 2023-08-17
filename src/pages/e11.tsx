import axios, { isAxiosError } from "axios";
import { Button } from "@/components/ui/button";
import * as Sentry from "@sentry/nextjs";

export default function E10() {
  async function handleClick() {
    try {
      const res = await axios.post("/api/e11", {
        name: "Jim",
      });
    } catch (error) {
      if (isAxiosError(error)) {
        let message = error.response!.data.message;
        console.log("message", message);
        Sentry.captureException(new Error(message));
      }
    }
  }

  return <Button onClick={handleClick}>Button</Button>;
}
