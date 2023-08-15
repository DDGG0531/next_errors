import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(400).json({ message: "格式錯誤：請檢查您的請求格式。" });

  // res.status(200).json({ name: "Jim" });
}
