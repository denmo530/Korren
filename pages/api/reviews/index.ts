import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { currentUser } = await serverAuth(req, res);
      if (!currentUser) return res.status(401).end();

      const { dormId, title, comment, rating, imageSrc } = await req.body;

      const review = await prismadb.review.create({
        data: {
          dormId: dormId.value,
          title,
          comment,
          rating,
          imageSrc,
          userId: currentUser.id
        }
      });

      return res.status(200).json(review);
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  }

  if (req.method === 'GET') {
    try {
      const reviews = await prismadb.review.findMany();
      return res.status(200).json(reviews);
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  }

  return res.status(405).end();
}
