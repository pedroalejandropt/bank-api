import chai from 'chai';
import chaiHttp from 'chai-http';
import createServer from '../src/framework/express/index';
import BaseRepository from '../src/repository/BaseRepository';
import ClientRepository from '../src/repository/ClientRepository';
const expect = chai.expect;
const dependencies = {
  baseRepository: new BaseRepository(),
  clientRepository: new ClientRepository(),
};
const { app, listen } = createServer(dependencies);

describe('API Integration Tests', () => {
  before(() => {
    listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  });

  it('should respond with a 200 status code for the root path', async () => {
    const res = await chai.request(app).get('/api/v1/base');
    expect(res.status).to.equal(200);
  });
});
