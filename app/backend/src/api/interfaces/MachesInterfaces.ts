export type IMatches = {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
  homeTeam?: {
    teamName: string,
  };
  awayTeam?: {
    teamName: string,
  };
};

export type IRegisterMatch = {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
};

export interface IMatchesRepository {
  getAll(): Promise<IMatches[]>;
  getByQuery(inProgress: boolean): Promise<IMatches[]>;
  getupdateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<string>;
  updateFinishMatch(id: number): Promise<string>;
  createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<IRegisterMatch | string>;
}
