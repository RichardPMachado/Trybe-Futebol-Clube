import { Request, Response, Router } from 'express';
import { LeaderboardService } from '../services';
import { LeaderboardController } from '../controller';

const router = Router();
const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

router.get('/leaderboard/home', (request: Request, response: Response) => leaderboardController
  .getLeaderboardHome(request, response));

router.get('/leaderboard/away', (request: Request, response: Response) => leaderboardController
  .getLeaderboardAway(request, response));

export default router;
