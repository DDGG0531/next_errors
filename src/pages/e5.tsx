import { useEffect, useState } from "react";
import * as Sentry from "@sentry/nextjs";
import { Button } from "@/components/ui/button";

export default function E5() {
  const [str, setStr] = useState("e5");
  function formateName(str: number) {
    return str.toFixed(2);
  }

  useEffect(() => {
    Sentry.setContext("character", {
      name: "Mighty Fighter",
      age: 19,
      attack_type: "melee",
    });

    Sentry.configureScope(function (scope) {
      scope.setTag("my-tag", "my value");
      scope.setUser({
        id: 42,
        email: "john.doe@example.com",
      });
      scope.clear();
    });
  }, []);

  function handleClick() {
    setStr(formateName("123"));
  }

  function handleClick2() {
    Sentry.withScope(function (scope) {
      scope.setTag("haha", "ha");
      scope.setLevel("warning");
      // will be tagged with my-tag="my value"
      Sentry.captureException(new Error("my error"));
    });
  }

  return (
    <>
      <div>{str}</div>
      <Button onClick={handleClick}>Button</Button>
      <Button onClick={handleClick2}>Button with scope</Button>
    </>
  );
}
