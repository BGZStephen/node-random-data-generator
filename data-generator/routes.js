const express = require('express')
const router = express.Router()
const CarManufacturer = require('./data-types/car-manufacturer/model')

const queryFunctions = {
  CarManufacturer: CarManufacturer.getAll()
}

router.post("/generate", (req, res, next) => {

  let queryArray = req.body.queries

  for(let query of queryArray) {
    queryFunctions[query['data-type']]
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.json(error)
    })
  }
})

module.exports = router
