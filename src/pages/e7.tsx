import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E7() {
  const [user, setUser] = useState({ mom: { age: 18 } });

  return (
    <div className="min-h-screen">
      <div>E7: click 造成 can not read property of undefined</div>
      <div>{user.mom.age}</div>
      <button onClick={() => setUser({})}>Button</button>
    </div>
  );
}
