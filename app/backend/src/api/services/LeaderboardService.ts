import TeamsService from './TeamsService';
import MatchesService from './MatchesService';
import { ILeaderboard, ILeaderboardRepository } from '../interfaces/LeaderboardInterface';
import calculator from '../utils/cauculator';
// import { ITeam } from '../interfaces/TeamsInterfaces';

export default class LeaderboardService implements ILeaderboardRepository {
  protected teamService = new TeamsService();
  protected matchesService = new MatchesService();

  async getALlTeams() {
    const teams = await this.teamService.getAll();
    const teamName = teams.map((e) => e.teamName);
    return teamName;
  }

  async getALlMatches() {
    const matches = await this.matchesService.getByQuery(false);
    return matches;
  }

  async createArray() {
    const teams = await this.getALlTeams();
    const arrayTeams: ILeaderboard[] = [];
    teams.forEach((e) => {
      const data = { name: '',
        totalPoints: 0,
        totalGames: 0,
        totalVictories: 0,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 0,
        goalsOwn: 0,
        goalsBalance: 0,
        efficiency: 0.00,
      };
      data.name = e;
      arrayTeams.push(data);
    });
    return arrayTeams;
  }

  async getHomeTeamData() {
    const leaderBoardData = await this.createArray();
    const matches = await this.getALlMatches();
    leaderBoardData.forEach((e) => {
      matches.forEach((match) => {
        if (match.homeTeam?.teamName === e.name) {
          e.goalsFavor += match.homeTeamGoals;
          e.goalsOwn += match.awayTeamGoals;
          e.totalGames += 1;
          if (match.homeTeamGoals > match.awayTeamGoals) {
            e.totalVictories += 1;
          } else if (match.homeTeamGoals < match.awayTeamGoals) {
            e.totalLosses += 1;
          } else e.totalDraws += 1;
        }
      });
    });
    return leaderBoardData;
  }

  async getAwayTeamData() {
    const leaderBoardData = await this.createArray();
    const matches = await this.getALlMatches();
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
    return leaderBoardData;
  }

  async getLeaderboardHome() {
    const leaderBoardData = await this.getHomeTeamData();
    await calculator(leaderBoardData);
    return leaderBoardData;
  }

  async getLeaderboardAway() {
    const leaderBoardData = await this.getAwayTeamData();
    await calculator(leaderBoardData);
    return leaderBoardData;
  }

  // async getAllLeaderboard() {
  //   const leaderBoardData = await this.getHomeTeamData();
  //   leaderBoardData.forEach((e) => {
  //     e.totalPoints = (e.totalVictories * 3);
  //     e.totalPoints += e.totalDraws;
  //   });
  //   return leaderBoardData;
  // }
}
// if (e.homeTeamGoals === e.awayTeamGoals) {
//   leaderboardModel[e.homeTeam?.teamName].totalDraws += 1;
//   leaderboardModel[e.awayTeam?.teamName].totalDraws += 1;
//   leaderboardModel[e.homeTeam?.teamName].totalPoints += 1;
//   leaderboardModel[e.awayTeam?.teamName].totalPoints += 1;
// }
// leaderboardModel[e.homeTeam?.teamName].totalGames += 1;
// leaderboardModel[e.awayTeam?.teamName].totalGames += 1;
// matches.forEach((e) => {
//   const homeTeam = e.homeTeam.teamName.toLowerCase().split(' ').join('_');
//   const awayTeam = e.awayTeam.teamName.toLowerCase().split(' ').join('_');
// if (e.homeTeamGoals < e.awayTeamGoals) {
//   leaderboard[0][test].totalLosses += 1;
//   leaderboard[0][e.awayTeam.teamName].totalVictories += 1;
//   leaderboard[0][e.homeTeam.teamName].goalsFavor += (e.homeTeamGoals - e.awayTeamGoals );
//   leaderboard[0][e.awayTeam.teamName].goalsFavor += (e.awayTeamGoals - e.homeTeamGoals);
//   leaderboard[0][e.awayTeam.teamName].totalPoints += 3;
// }
// if (e.homeTeamGoals > e.awayTeamGoals) {
//   leaderboard[0][e.homeTeam.teamName].totalVictories += 1;
//   leaderboard[0][e.awayTeam.teamName].totalLosses += 1;
//   leaderboard[0][e.homeTeam.teamName].goalsFavor += (e.homeTeamGoals - e.awayTeamGoals);
//   leaderboard[0][e.awayTeam.teamName].goalsOwn += (e.awayTeamGoals - e.homeTeamGoals);
//   leaderboard[0][e.homeTeam.teamName].totalPoints += 3;
// }
// });
// const teams = await this.getALlTeams();
// const matches = await this.getALlMatches();
// const leaderboardModel = {};
// teams.forEach((e) => {

// })
// const hometeam = matches.map((e) => e.homeTeam);
// const homeTeamName = hometeam.map((e) => e?.teamName);
// const awayteam = matches.map((e) => e.id);
