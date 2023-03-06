import { Request, Response, Router } from 'express';
import { LeaderboardController } from '../controller';

const router = Router();

router.get('/leaderboard/home', (response: Response, request: Request) => LeaderboardController
  .getLeaderboard(request, response));

export default router;
