import dbConnect from '../../../lib/dbClient';
import { User, UserData } from '../../../models/user';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const users: UserData[] = await User.find({});
        res.status(200).json({ users: users });
      } catch (error) {
        res.status(500).json({ error: error });
      }
      break;
    case 'POST':
      await User.create(req.body)
        .then((user) => res.status(201).json({ data: user }))
        .catch((error) => {
          console.error('An error occured trying to create a user.\n', error);
          res.status(400).json({ message: 'Invalid request body' });
        });
      break;
    default:
      res
        .status(400)
        .json({ message: 'No endpoint exists for method ' + method });
  }
}