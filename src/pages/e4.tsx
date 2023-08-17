import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      {ages.map((age, index) => (
        <div key={index}>{age}</div>
      ))}
    </div>
  );
}
