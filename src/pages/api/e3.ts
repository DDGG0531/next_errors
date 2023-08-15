import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  user: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    user: {
      name: "be",
      // age: 10,
    },
  });
}
