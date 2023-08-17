import axios from "axios";
import { Button } from "@/components/ui/button";

export default function E10() {
  async function handleClick() {
    const res = await axios.post("/api/e11", {
      name: "Jim",
    });
  }

  return <Button onClick={handleClick}>Button</Button>;
}
