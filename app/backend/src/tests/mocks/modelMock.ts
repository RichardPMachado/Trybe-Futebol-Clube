import { ITeam } from "../../api/interfaces/TeamsInterfaces"

const findAllMock: ITeam[] = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
  {
    "id": 4,
    "teamName": "Corinthians"
  },
  {
    "id": 5,
    "teamName": "Cruzeiro"
  },
  {
    "id": 6,
    "teamName": "Ferroviária"
  },
  {
    "id": 7,
    "teamName": "Flamengo"
  },
  {
    "id": 8,
    "teamName": "Grêmio"
  },
]

const findByPkMock =   {
  "id": 8,
  "teamName": "Grêmio"
}

const validLogin = {
    "email": "admin@admin.com",
    "password": "secret_admin"
};

const noEmail = {
    "password": "123456789"
}

const noPass = {
    "email": "eu@gmail.com"
}

const invalidPass = {
    "email": "eu@gmail.com",
    "password": "123456789"
}

export {validLogin, noEmail, noPass, invalidPass}
export { findAllMock, findByPkMock }