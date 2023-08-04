import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // As of now we don't intend to let users create POST requests for adding dorms
  // Therefore we only handle GET requests
  if (req.method !== 'GET') return res.status(405).end();

  try {
    // We want to try and get all dorms
    const dorms = await prismadb.dorm.findMany();
    return res.status(200).json(dorms);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
