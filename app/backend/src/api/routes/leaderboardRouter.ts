import { Request, Response, Router } from 'express';
import { LeaderboardController } from '../controller';
import { LeaderboardService } from '../services';

const router = Router();
const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

router.get('/leaderboard/home', (response: Response, request: Request) => leaderboardController
  .getLeaderboardHome(request, response));

router.get('/leaderboard/away', (response: Response, request: Request) => leaderboardController
  .getLeaderboardAway(request, response));

export default router;
