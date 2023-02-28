export interface ITeam {
  id?: number,
  teamName: string,
}

export interface ITeamsRepository {
  getAll(): Promise<ITeam[]>
}
