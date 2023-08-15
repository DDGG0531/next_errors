import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E8() {
  function handleClick(e) {
    throw new Error("E8: click導致錯誤");
  }

  return (
    <div className="min-h-screen">
      <div>E8: click導致錯誤</div>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}
