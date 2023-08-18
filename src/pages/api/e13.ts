import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({
  //   user: {
  //     age: 10,
  //   },
  // });
  // 故意報錯
  // http的錯誤代碼有對應的意思，會被記錄在sentry
  res.status(400).json({ message: "e13故意犯錯" });
}
