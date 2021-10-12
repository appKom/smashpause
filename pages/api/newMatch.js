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
    user: username,
    pass: password,
    dbName: dbname,
    authSource: "admin",
  });

  // Get all the state we need for the page

  if (req.body.player1 && req.body.player2 && req.body.winnerID) {
    Match.create(
      { player1: req.body.player1, player2: req.body.player2, winnerID: req.body.winnerID },
      (err, small) => {
        if (err) res.statusCode = 500;
        // saved!
      }
    );
    res.statusCode = 200;
  } else res.statusCode = 400;

  res.end(JSON.stringify({}));
}