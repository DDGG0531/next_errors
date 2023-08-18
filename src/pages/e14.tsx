import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as Sentry from "@sentry/nextjs";

export default function E12() {
  const [time, setTime] = useState(0);

  async function handleClick() {
    Sentry.withScope((scope) => {
      scope.setExtras({
        [time]: `${time} ms`,
      });

      Sentry.setContext("detail", {
        [time]: `${time} ms`,
      });

      const error = new Error("E14 error");

      Sentry.captureException(error, scope);

      setTime((prev) => prev + 1);
    });
  }

  async function handleClick2() {
    const error = new Error("E14 error 2");
    Sentry.captureException(error);
  }

  return (
    <>
      <h1>{time}</h1>
      <Button onClick={handleClick}>Button</Button>
      <Button onClick={handleClick2}>Button2</Button>
    </>
  );
}
