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

export interface IUserRepository {
  getByLogin(email: string, password: string): Promise<string>;
}
