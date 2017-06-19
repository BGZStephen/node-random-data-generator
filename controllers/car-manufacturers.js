const async = require('asyncawait/async');
const await = require('asyncawait/await');
const config = require('../config/database');
const express = require('express')
const mongoose = require('mongoose');
const router = express.Router()
const CarManufacturer = require("../models/car-manufacturer")

router.post("/create", (req, res, next) => {
  let carManufacturerObject = new CarManufacturer({
    createdOn: new Date(),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    username: req.body.username,
  })

  CarManufacturer.exists(carManufacturerObject)
  .then(result => {
    return CarManufacturer.create(carManufacturerObject)
    .then(result => {
      res.json(result)
    })
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/deleteOne", (req, res, next) => {
  let carManufacturerObject = {
    _id: req.body._id
  }

  CarManufacturer.deleteOne(carManufacturerObject)
  .then(result => {
    res.json(result)
  })
  .catch(error => {
    res.json(error)
  })
})

router.get("", (req, res, next) => {

  CarManufacturer.get(req.query)
  .then(result => {
    res.json(result)
  })
  .catch(error => {
    res.json(error)
  })
})

router.post("/update", (req, res, next) => {
  let carManufacturerObject = {
    _id: req.body._id,
    name: req.body.name
  }

  CarManufacturer.exists(carManufacturerObject)
  .then(result => {
    return CarManufacturer.updateCarManufacturer(carManufacturerObject)
    .then(result => {
      res.json(result)
    })
  })
  .catch(error => {
    res.json(error)
  })
})

module.exports = router
