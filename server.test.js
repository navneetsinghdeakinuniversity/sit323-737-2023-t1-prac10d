const request = require('supertest');
const { expect } = require('chai');

const app = require('./server'); // Assuming the server.js file is in the same directory

describe('GET /hello', () => {
  it('should return a welcome message', (done) => {
    request(app)
      .get('/hello')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello! Welcome to my calculator service.');
        done();
      });
  });
});


