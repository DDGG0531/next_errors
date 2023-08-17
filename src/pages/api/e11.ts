import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("body", req.body); // { name: 'Jim' }

  // 故意報錯
  res.status(400).json({ message: "e11故意犯錯" });
}
