import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');


import { app } from '../app';
import leaderBoardMock from './mocks/leaderBoardMock';
import { LeaderboardService } from '../api/services';
import leaderboardAwayMock from './mocks/leaderboardAwayMock';

chai.use(chaiHttp);
const {  expect } = chai;

describe('Teste o endpoint LeaderBord', () => {
  afterEach(() => {
    sinon.restore()
  })
  
  it('Teste se a classificação de todas as equipes está correta', async () => {
    sinon
      .stub(new LeaderboardService(), 'getAllLeaderboard')
      .resolves(leaderBoardMock);

    const response = await chai.request(app).get('/leaderboard');

    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.deep.equal(leaderBoardMock)
  })

  it('Teste se a classificação das equipes visitantes está correta', async () => {
    sinon
      .stub(new LeaderboardService(), 'getLeaderboardAway')
      .resolves(leaderboardAwayMock);

    const response = await chai.request(app).get('/leaderboard/away');

    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.deep.equal(leaderboardAwayMock)
  })
})