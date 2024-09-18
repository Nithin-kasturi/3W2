import User from '../models/User.js';

// Claim random points for a user
export const claimPoints = async (req, res) => {
  const { userId } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;
  const user = await User.findByIdAndUpdate(userId, { $inc: { points: randomPoints } }, { new: true });
  res.json({ user, randomPoints });
};

// Get leaderboard
export const getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ points: -1 });
  res.json(users);
};
export const getUsers=async (req,res)=>{
    const users=await User.find({});
    res.json(users);
}
