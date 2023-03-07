import { Request, Response } from 'express';
import { LeaderboardService } from '../services';

export default class LeaderboardController {
  constructor(private _service: LeaderboardService) {}
  async getLeaderboardHome(request: Request, response: Response) {
    const leaderboard = await this._service.getLeaderboardHome();
    console.log(leaderboard);
    return response.status(200).json(leaderboard);
  }

  async getLeaderboardAway(request: Request, response: Response) {
    const leaderboard = await this._service.getLeaderboardAway();
    console.log(leaderboard);
    return response.status(200).json(leaderboard);
  }
}
