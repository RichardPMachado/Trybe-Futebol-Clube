import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamModel from '../database/models/TeamModel';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import { findAllMock, findByPkMock } from './mocks/modelMock';
// import { ITeam } from '../api/interfaces/TeamsInterfaces';
// import { Model } from 'sequelize';
describe('Testando a rota Teams', () => {
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

  it('Teste se o verbo Get retorna uma lista de times', async () => {
    sinon
      .stub(TeamModel, "findAll")
      .resolves(findAllMock as TeamModel[])

    const result = await chai.request(app).get('/teams');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(findAllMock);
  });

  it('Teste se o verbo Get retorna um time equivalente ao id', async () => {
    sinon
    .stub(TeamModel, "findByPk")
    .resolves(findByPkMock as TeamModel)

  const result = await chai.request(app).get('/teams/8');
  expect(result.status).to.be.equal(200);
  expect(result.body).to.be.deep.equal(findByPkMock);
  });
});
