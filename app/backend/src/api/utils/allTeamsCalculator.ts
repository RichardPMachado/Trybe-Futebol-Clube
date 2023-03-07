import { ILeaderboard } from '../interfaces/LeaderboardInterface';
import { IMatches } from '../interfaces/MachesInterfaces';

export default (leaderBoardData: ILeaderboard[], matches: IMatches[]) => {
  leaderBoardData.forEach((e) => {
    matches.forEach((match) => {
      if (match.awayTeam?.teamName === e.name) {
        e.goalsFavor += match.awayTeamGoals;
        e.goalsOwn += match.homeTeamGoals;
        e.totalGames += 1;
        if (match.awayTeamGoals > match.homeTeamGoals) {
          e.totalVictories += 1;
        } else if (match.awayTeamGoals < match.homeTeamGoals) {
          e.totalLosses += 1;
        } else e.totalDraws += 1;
      }
    });
  });
};
