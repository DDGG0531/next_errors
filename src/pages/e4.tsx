import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function E4() {
  const [ages, setAges] = useState([]);

  // 看不出錯誤
  useEffect(() => {
    async function callApi() {
      const res = await axios.get("/api/e4");
      const { ages } = res.data;
      setAges(ages);
    }

    callApi();
  }, []);
  return (
    <div className="min-h-screen">
      <div>E4: useEffect 中的api回傳值格式錯誤: 預期array,回傳數字</div>
      <div>
        {ages.map((age, index) => (
          <div key={index}>{age}</div>
        ))}
      </div>
    </div>
  );
}
