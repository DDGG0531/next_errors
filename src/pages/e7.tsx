import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E7() {
  const [user] = useState({});

  return (
    <div className="min-h-screen">
      <div>E7: can not read property of undefined</div>
      <div>{user.mom.age}</div>
    </div>
  );
}
