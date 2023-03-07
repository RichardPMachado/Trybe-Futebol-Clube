// import { IMatches } from './MachesInterfaces';

import { IMatches } from './MachesInterfaces';

export interface ILeaderboard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number,
  efficiency: number,
}

export interface ILeaderboardRepository {
  getAllTeams(): Promise<string[]>;
  getAllMatches(): Promise<IMatches[]>;
  createArray(): Promise<ILeaderboard[]>;
  getLeaderboardHome(): Promise<ILeaderboard[]>;
  getLeaderboardAway(): Promise<ILeaderboard[]>;
}
