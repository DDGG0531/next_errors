import axios from "axios";
import { Button } from "@/components/ui/button";

export default function E9() {
  async function handleClick() {
    try {
      const res = await axios.get("/api/e9");
    } catch (error) {
      console.log("error", error);
    }
  }

  return <Button onClick={handleClick}>Button</Button>;
}
