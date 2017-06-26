const express = require('express')
const router = express.Router()
const CarManufacturer = require('./data-types/car-manufacturer/')


router.post("/generate", (req, res, next) => {

  const queryFunctions = {
    CarManufacturer: CarManufacturer.process(req.body.queries)
  }

  let queryArray = req.body.queries

  for(let query of queryArray) {
    return queryFunctions[query['data-type']]
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.json(error)
    })
  }
})

module.exports = router
