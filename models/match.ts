import mongoose from 'mongoose';


delete mongoose.connection.models["Matches"];

const MatchSchema = new mongoose.Schema(
  {
    playerIDs: [{ type: String }],
    winnerID: { type: String },
  },
  { autoCreate: true, timestamps: true }
);

export const Match = mongoose.model('Matches', MatchSchema);

export interface MatchData {
  playerIDs: String[];
  winnerID: String;
}
