import request from 'supertest';

import app from '../app';

it('return 200 OK when signup request is valid', () => {
  request(app)
    .post('api/auth/login')
    .send({
      email: 'abdullahabir3+1@gmail.com',
      password: 'Abir@1234',
    })
    .expect(200);
});
