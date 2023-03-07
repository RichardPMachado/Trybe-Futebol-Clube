import { ILeaderboard } from '../interfaces/LeaderboardInterface';
import countEfficiency from './countEfficiency';

export default (leaderBoardData: ILeaderboard[]) => {
  leaderBoardData.forEach((e) => {
    e.totalPoints = (e.totalVictories * 3);
    e.totalPoints += e.totalDraws;
    e.goalsBalance = e.goalsFavor - e.goalsOwn;
    e.efficiency = countEfficiency(e.totalPoints, e.totalGames);
  });
};
