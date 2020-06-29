const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`here are today's basket selections`)
})

router.post('/', (req, res) => {
  const basketId = req.params.id
  const basket = req.body
  if(!basket.basketPriceInUSD) {
    res.status(422).send(() => {
      return new Error('basket must have a price, this is america')
    })
  }
  res.status(201).json(`successfully created basket ${basketId}`)
})

router.post('/:id', (req, res) => {
  const basketId = req.params.id
  const basket = req.body
  res.send(`here are this week's basket selections for option ${basketId}`)
})

module.exports = router