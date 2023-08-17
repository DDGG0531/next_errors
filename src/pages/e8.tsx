import { Button } from "@/components/ui/button";

export default function E8() {
  function handleClick() {
    throw new Error("E8: click導致錯誤");
  }

  return <Button onClick={handleClick}>Button</Button>;
}
