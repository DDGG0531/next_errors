import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E6() {
  const [num] = useState(10);

  return (
    <div className="min-h-screen">
      <div>E6: template 上有錯</div>
      <div>{num.toLowerCase()}</div>
    </div>
  );
}
