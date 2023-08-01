import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    const { dormId } = req.query;

    const reviews = await prismadb.review.findMany({
      where: {
        dormId: String(dormId),
      },
    });

    return res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
