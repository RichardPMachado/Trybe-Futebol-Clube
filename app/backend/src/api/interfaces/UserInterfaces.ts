export interface ILogin {
  id: number
  email: string;
  role: string;
}

export interface IUser {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}
export interface IToken {
  token: string;
}

export interface IRole {
  role: string
}

export interface IUserRepository {
  getByLogin(email: string, password: string): Promise<string>;
  authLogin(payload: ILogin): Promise<IRole>
}
