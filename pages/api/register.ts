import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { email, firstName, lastName, password, name } = (await req.body) as {
      email: string;
      firstName: string;
      lastName: string;
      password: string;
      name: string;
    };
    // Check db if the email is already in use
    const existingUser = await prismadb.user.findUnique({
      where: {
        email
      }
    });

    if (existingUser) {
      return res.status(422).json({ error: 'Email already in use' });
    }
    // If the email is not taken then hash the password and register the user!
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        firstName,
        lastName,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date()
      }
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).end();
  }
}
