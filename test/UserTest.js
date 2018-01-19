import chai from 'chai';
import supertest from 'supertest';

import app from '../app';

const {
  expect,
} = chai;
const request = supertest(app);

describe('User routes: ', () => {
  it('should get all users', (done) => {
    request.get('/api/users')
      .end((error, response) => {
        const {
          body,
          status,
        } = response;
        expect(response).to.have.property('status');
        expect(response).to.have.property('body');
        expect(body).to.have.property('user');
        expect(body).to.have.property('message');
        expect(body.user).to.be.an('array');
        expect(status).to.equal(200);
        done();
      });
  });
});
