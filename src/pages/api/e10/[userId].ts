import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("req", req);
  // 查詢跟路徑 都放在query
  console.log("query", req.query); // {name:'Jim'}

  // 故意報錯
  res.status(400).json({ message: "e10故意犯錯" });
}
