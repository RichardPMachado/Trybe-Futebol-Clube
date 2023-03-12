import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import matchesMock from './mocks/matchesMock'
import MatchesModel from '../database/models/MatchesModel';
import matchesByQueryMock from './mocks/matchesByQueryMock'
import Team from '../database/models/TeamModel'
import { IMatches } from '../api/interfaces/MachesInterfaces';
// import { ITeam } from '../api/interfaces/TeamsInterfaces';
// import { Model } from 'sequelize';
describe('Testando a rota Matches', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */
  
  // let chaiHttpResponse: Response;
  
  // before(async () => {
  //   sinon
  //   .stub(TeamsModel, "findOne")
  //   .resolves({
  //     ...<Seu mock>
  //   } as Example);
  // });
  
  afterEach(() => {
    sinon.restore()
  })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('Teste se o verbo Get retorna uma lista de matches', async () => {
    sinon
      .stub(MatchesModel, "findAll")
      .resolves(matchesMock  as unknown as MatchesModel[])

    const result = await chai.request(app).get('/matches');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(matchesMock);
  });

  it('Teste se o verbo Get retorna as partidas encerradas', async () => {
    sinon
    .stub(MatchesModel, "findAll")
    .resolves(matchesByQueryMock as unknown as MatchesModel[])

    const result = await chai.request(app).get('/matches?inProgress=false');
  
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(matchesByQueryMock);
  });
  
  it('Teste se o Token não existe', async () => {

    const result = await chai.request(app).post('/matches').send({
      awayTeamId: 8,
      homeTeamGoals: 2,
      awayTeamGoals: 2,
    });
  
    expect(result.status).to.be.equal(401);
    expect(result.body).to.be.deep.equal({ message: 'Token not found'});
  });
});
