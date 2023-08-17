import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function E7() {
  const [user, setUser] = useState({ mom: { age: 18 } });

  return (
    <>
      <div>{user.mom.age}</div>
      <Button onClick={() => setUser({})}>Button</Button>
    </>
  );
}
