import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function E6() {
  const [str, setStr] = useState("13");

  return (
    <>
      <div>{str.toLowerCase()}</div>
      <Button onClick={() => setStr(123)}>Button</Button>
    </>
  );
}
