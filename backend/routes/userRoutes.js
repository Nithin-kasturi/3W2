import express from 'express';
import { claimPoints, getLeaderboard ,getUsers} from '../controllers/userController.js';

const router = express.Router();

// Claim points for user
router.post('/claim/:userId', claimPoints);

// Get leaderboard
router.get('/leaderboard', getLeaderboard);
router.get('/',getUsers);
export default router;
