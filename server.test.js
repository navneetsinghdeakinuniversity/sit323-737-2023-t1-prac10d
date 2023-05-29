const request = require('supertest');
const assert = require('assert');

const app = require('./server'); // Assuming the server.js file is in the same directory


describe('GET /hello', () => {
  it('should return a welcome message', (done) => {
    request(app)
      .get('/hello')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.text, 'Hello! Welcome to my calculator service.');
        done();
      });
  });
});


