import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E5() {
  const [str, setStr] = useState("e5");
  function formateName(str: number) {
    return str.toFixed(2);
  }

  return (
    <div className="min-h-screen">
      <div>E5: click 造成function噴錯</div>
      <div>{str}</div>
      <button onClick={() => setStr(formateName("123"))}>Button</button>
    </div>
  );
}
