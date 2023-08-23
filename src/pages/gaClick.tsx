import { Button } from "@/components/ui/button";

export default function GaClick() {
  function clickHandler() {
    window.gtag("event", "click", {
      event_category: "button",
      event_label: "button click",
      value: 1,
    });
  }
  return (
    <>
      <Button onClick={clickHandler}>Button</Button>
    </>
  );
}
