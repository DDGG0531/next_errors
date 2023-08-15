import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ages: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    ages: 10,
  });
}
