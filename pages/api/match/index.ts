import dbConnect from '../../../lib/dbClient';
import { Match, MatchData } from '../../../models/match';
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
        const matches: MatchData[] = await Match.find({});
        res.status(200).json({ matches: matches });
      } catch (error) {
        res.status(500).json({ error: error });
      }
      break;
    case 'POST':
      await Match.create(req.body)
        .then((match) => res.status(201).json({ data: match }))
        .catch((error) => {
          console.error('An error occured trying to create match.\n', error);
          res.status(400).json({ message: 'Invalid request body' });
        });
      break;
    default:
      res
        .status(400)
        .json({ message: 'No endpoint exists for method ' + method });
  }
}
