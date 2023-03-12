import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from '../app';
import UserModel from '../database/models/UserModel';
// import JWTToken from "../api/token/JWTToken";
import { LoginService } from "../api/services";

chai.use(chaiHttp);

const { expect } = chai;


describe('teste o endpoint /login', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Teste se o Login está inserido corretamente', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzg1Nzg3MTZ9.AlaJ1FN0pRSvHzyBOFJtrCLb70aWPYpA5vKCLHeqzZE'

    sinon.stub(UserModel, 'findOne').resolves({ 
      id: 1,
      username: 'Admin',
      role: 'admin',
      email: 'admin@admin.com',
      password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
    } as UserModel)
    sinon.stub(new LoginService(), 'getByLogin').resolves(token)
    const response = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_admin'
    });
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.not.deep.equal({ token })
  });

  it('Teste se email está correto', async () => {
    const response = await chai.request(app).post('/login').send({
      email: 'richard@test.com',
      password: 'secret_user'
    });
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Invalid email or password' })
  });

  it('Teste se password está correto', async () => {
    const response = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_richard'
    });
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Invalid email or password' })
  });
  
  it('Campo email precisa ser preenchido', async () => {
    const response = await chai.request(app).post('/login').send({
      password: 'secret_richard'
    });
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' })
  });
})