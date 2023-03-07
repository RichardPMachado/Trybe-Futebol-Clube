import { Request, Response } from 'express';
import { LeaderboardService } from '../services';
import sortOrder from '../utils/sortOrder';

export default class LeaderboardController {
  constructor(private _service: LeaderboardService) {}
  async getLeaderboardHome(request: Request, response: Response) {
    const leaderboard = await this._service.getLeaderboardHome();
    const sortOrderTeams = sortOrder(leaderboard);
    console.log(sortOrderTeams);
    return response.status(200).json(sortOrderTeams);
  }

  async getLeaderboardAway(request: Request, response: Response) {
    const leaderboard = await this._service.getLeaderboardAway();
    const sortOrderTeams = sortOrder(leaderboard);
    console.log(sortOrderTeams);
    return response.status(200).json(sortOrderTeams);
  }

  async getAllLeaderboard(request: Request, response: Response) {
    const leaderboard = await this._service.getAllLeaderboard();
    const sortOrderTeams = sortOrder(leaderboard);
    console.log(sortOrderTeams);
    return response.status(200).json(sortOrderTeams);
  }
}
