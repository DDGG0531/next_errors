import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 故意報錯
  res.status(412).json({ message: "e12故意犯錯" });
}
