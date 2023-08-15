import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E6() {
  const [str, setStr] = useState("13");

  return (
    <div className="min-h-screen">
      <div>E6: click 造成template噴錯</div>
      <div>{str.toLowerCase()}</div>
      <button onClick={() => setStr(123)}>Button</button>
    </div>
  );
}
