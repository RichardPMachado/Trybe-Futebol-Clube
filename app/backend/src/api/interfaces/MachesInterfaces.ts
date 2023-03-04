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

export interface IMatchesRepository {
  getAll(): Promise<IMatches[]>;
  getByQuery(inProgress: boolean): Promise<IMatches[]>;
  getFinishMatch(id: number): Promise<string>;
}
