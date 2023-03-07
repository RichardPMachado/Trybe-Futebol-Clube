// import { IMatches } from './MachesInterfaces';

export interface ILeaderboard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
}

export interface ILeaderboardRepository {
  getLeaderboardHome(): Promise<ILeaderboard[]>;
  getLeaderboardAway(): Promise<ILeaderboard[]>;
  // getAllLeaderboard(): Promise<ILeaderboard[]>;
  // getPointsBoard(): Promise<ILeaderboard>;
  getALlTeams(): Promise<string[]>;
  // getALlMatches(): Promise<IMatches[]>;
  createArray(): Promise<ILeaderboard[]>;
}
