const async = require('asyncawait/async');
const await = require('asyncawait/await');
const config = require('../config/database');
const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const router = express.Router()
const User = require("../models/user")

router.post("/authenticate", (req, res, next) => {
  let userObject = {
    email: req.body.email,
    password: req.body.password
  }

  User.getOne({email: userObject.email})
  .then(result => {
    userObject.hash = result.password
    return User.comparePassword(userObject)
  }).then(result => {
    res.json(result)
  }).catch(err => {
    console.log(err)
    res.json({success: err.success, message: err.message})
  })
})

router.post("/create", (req, res, next) => {
  let userObject = new User({
    createdOn: new Date(),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    username: req.body.username
  })

  let createUser = async (function (userObject) {
    let exists = await(User.exists({email: userObject.email}));
    return User.create(userObject);
  })

  createUser(userObject)
  .then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.json({success: err.success, message: err.message})
  })
})

router.post("/deleteOne", (req, res, next) => {

})

router.get("", (req, res, next) => {

})

router.post("/update", (req, res, next) => {

})

router.post("/updatePassword", (req, res, next) => {

})

module.exports = router
