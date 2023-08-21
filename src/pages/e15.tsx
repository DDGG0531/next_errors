import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { AxiosContext } from "@/hooks/useAxios";

export default function E12() {
  const [time, setTime] = useState(0);
  const instance = useContext(AxiosContext);

  async function handleClick() {
    try {
      const res = await instance.post("/api/e15", {
        name: "Jim",
        age: 10,
        parent: {
          dad: "jim's dad",
          mom: "jim's mom",
        },
      });
    } catch (error) {
      // 故意搞破壞，製造第二個錯誤
      setTime("mistake");
    }
  }

  function format(v: number) {
    return v.toFixed();
  }

  const newTime = format(time);

  return (
    <>
      <h1>{newTime}</h1>
      <Button onClick={handleClick}>Button</Button>
    </>
  );
}
