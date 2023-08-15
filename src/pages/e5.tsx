import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E5() {
  const [str, setStr] = useState("e5");
  function formateName(str: number) {
    return str.toFixed(2);
  }

  const newName = formateName(str);

  return (
    <div className="min-h-screen">
      <div>E5: function 有錯</div>
      <div>{newName}</div>
    </div>
  );
}
