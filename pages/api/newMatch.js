import mongoose from "mongoose";

import { Match } from "../../models/schema";

const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const dbname = "Smashinfo";
export const url = process.env.DATABASE_URL;
const key = process.env.KEY;

export default async function handler(req, res) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    user: username,
    pass: password,
    dbName: dbname,
    authSource: "admin",
  });

  // Get all the state we need for the page

  if (req.body.players && req.body.winner) {
    Match.create(
      { players: req.body.players, amount: req.body.winner },
      (err, small) => {
        if (err) console.log(err);
        // saved!
      }
    );
    res.statusCode = 200;
  } else res.statusCode = 500;

  res.end(JSON.stringify({}));
}