import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(400).json({ message: "e9故意犯錯" });
}
