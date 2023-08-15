import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E3() {
  const [user, setUser] = useState({
    name: "Jim",
    age: 18,
  });

  // 看不出錯誤
  useEffect(() => {
    async function callApi() {
      const res = await axios.get("/api/e3");
      const { user } = res.data;
      setUser(user);
    }

    callApi();
  }, []);
  return (
    <div className="min-h-screen">
      <div>E3: useEffect 中的api回傳值漏key: 正常</div>
      <div>名字：{user.name}</div>
      <div>年紀：{user.age}</div>
    </div>
  );
}
