import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { AxiosContext } from "@/hooks/useAxios";
import { isAxiosError } from "axios";

export default function E13() {
  const instance = useContext(AxiosContext);

  async function handleClick() {
    // 用try catch 悶住axiosError <- 已處理
    // 其他的往外拋
    try {
      const res = await instance.post(
        "/api/e13",
        {
          name: "Jim",
        },
        {
          transformRequest: [
            (data, headers) => {
              headers.__manuallyHandler__ = [400];
              return data;
            },
          ],
        }
      );

      console.log(res);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          console.log("jim handle manually");
        }
      } else if (!isAxiosError(error)) {
        throw error;
      }
    }
  }

  return (
    <>
      <Button onClick={handleClick}>Button</Button>
    </>
  );
}
