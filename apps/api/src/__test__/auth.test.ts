import request from 'supertest';

import app from '../app';

describe('User authentication', () => {
  it('return 200 OK when signup request is valid', (done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'abdullahabir3+1@gmail.com',
        password: 'Abir@1234',
      })
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});
