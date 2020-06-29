const request = require('supertest')

describe('GET /baskets', () => {
  let app;
  beforeEach(() => {
    delete require.cache[require.resolve('../index')]
    app = require('../index')
  })

  it('responds with a 200 and a message about baskets', (done) => {
    request(app)
      .get('/baskets')
      .expect(`here are today's basket selections`)
      .expect(200, done)
  })

  it('responds with a 200 and a message about baskets', (done) => {
    request(app)
      .get('/baskets')
      .expect(`here are today's basket selections`)
      .expect(200, done)
  })
})

describe('POST /baskets', () => {
  let app;
  beforeEach(() => {
    delete require.cache[require.resolve('../index')]
    app = require('../index')
  })
  let newValidBasket = {
    "basketId": 45,
    "basketName": "Lean & Green",
    "basketPriceInUSD": 25
  }

  let newBasketMissingFields = {
    "basketId": 98,
    "basketName": "Imprisoning Free Radicals"
  }
  it('can accept a basket object', (done) => {
    request(app)
      .post('/baskets')
      .send(newValidBasket)
      .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      .expect(201)
      .end(err => {
        if (err) return done(err)
        done()
      })
  })

  it('responds with a 422 when payload does not contain required fields', (done) => {
    request(app)
      .post('/baskets')
      .send(newBasketMissingFields)
      .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      .expect(422)
      .end(err => {
        if (err) return done(err)
        done()
      })
  })
})