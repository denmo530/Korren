import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // Check if user is authenticated - if not return 401
      const { currentUser } = await serverAuth(req, res);
      if (!currentUser) return res.status(401).end();

      const reviews = await prismadb.review.findMany({
        where: {
          userId: currentUser.id,
        },
      });

      return res.status(200).json(reviews.reverse());
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  }

  if (req.method === "DELETE") {
    try {
      const { currentUser } = await serverAuth(req, res);
      if (!currentUser) return res.status(401).end();

      const reviewId = req.body.reviewId;

      // Find the review by ID
      const review = await prismadb.review.findUnique({
        where: {
          id: reviewId,
        },
      });

      if (!review) {
        // Review not found
        return res.status(404).json({ error: "Review not found" });
      }

      if (review.userId !== currentUser.id) {
        // User is not authorized to delete this review
        return res.status(403).json({ error: "Unauthorized" });
      }

      await prismadb.review.delete({
        where: {
          id: reviewId,
        },
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  }

  return res.status(405).end();
}
