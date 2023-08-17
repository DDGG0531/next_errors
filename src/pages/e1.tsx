import { useEffect } from "react";

export default function E1() {
  useEffect(() => {
    throw new Error("E1: mounted時出錯");
  }, []);

  return <></>;
}
