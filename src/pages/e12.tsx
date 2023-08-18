import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { AxiosContext } from "@/hooks/useAxios";

export default function E12() {
  const instance = useContext(AxiosContext);

  async function handleClick() {
    const res = await instance.post("/api/e12", {
      name: "Jim",
    });
    console.log(res);
  }

  return <Button onClick={handleClick}>Button</Button>;
}
