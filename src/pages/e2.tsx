import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E2() {
  const [name, setName] = useState("no-name");
  useEffect(() => {
    // async function callApi() {
    //   try {
    //     const res = await axios.get("/api/e2");
    //     const { name } = res.data;
    //     setName(name);
    //   } catch (error) {
    //     if (isAxiosError(error)) {
    //       const { status } = error.response!;
    //       const { message } = error.response!.data;

    //       console.log("status", status);
    //       console.log("message", message);
    //     }
    //   }
    // }

    // ! Unhandled Runtime Error
    // ! sentry 會捕捉到"Request failed with status code 400", 這是axios自己產生的錯誤訊息
    async function callApi() {
      const res = await axios.get("/api/e2");
      const { name } = res.data;
      setName(name);
    }

    callApi();
  }, []);
  return (
    <div className="min-h-screen">
      <div>E2: useEffect 中的api噴錯</div>
      <div>內容：{name}</div>
    </div>
  );
}
