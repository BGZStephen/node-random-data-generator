const async = require('asyncawait/async');
const await = require('asyncawait/await');
const config = require('../../config');
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require("./model")

router.post("/authenticate", (req, res, next) => {
  let userObject = {
    email: req.body.email,
    password: req.body.password
  }

  let authenticateUser = async (function (userObject) {
    let user = await(User.getUser({email: userObject.email}))
    userObject.hash = user.data.password
    return User.comparePassword(userObject)
  })

  authenticateUser(userObject)
  .then(result => {
    res.json(result)
  })
  .catch(error => {
    console.log(error)
    res.json({success: error.success, message: error.message})
  })
})

router.post("/create", (req, res, next) => {
  let userObject = new User({
    createdOn: new Date(),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    username: req.body.username,
  })

  let createUser = async (function (userObject) {
    await(User.exists({email: userObject.email}));
    await(User.exists({username: userObject.username}));
    return User.create(userObject);
  })

  createUser(userObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/deleteOne", (req, res, next) => {
  let userObject = {
    _id: req.body._id
  }

  User.deleteOne(userObject)
  .then(result => {
    res.json(result)
  })
  .catch(error => {
    res.json(error)
  })
})

router.get("", (req, res, next) => {

  User.get(req.query)
  .then(result => {
    res.json(result)
  })
  .catch(error => {
    res.json(error)
  })
})

router.post("/update", (req, res, next) => {
  let userObject = {
    email: req.body.email,
    firstName: req.body.firstName,
    _id: req.body._id,
    lastName: req.body.lastName,
    username: req.body.username
  }

  let updateUser = async (function(userObject) {
    let emailQuery = await(User.getUser({email: userObject.email}))
    let usernameQuery = await(User.getUser({username: userObject.username}))
    if(!emailQuery.success || emailQuery._id == userObject._id) {
      reject({success: false, message: "Email already in use"})
    } else if (!usernameQuery.success || usernameQuery._id == userObject._id) {
      reject({success: false, message: "Username already in use"})
    } else {
      return User.updateUser(userObject)
    }
  })

  updateUser(userObject)
  .then(result => {
    res.json(result)
  })
  .catch(error => {
    res.json(error)
  })
})

router.post("/updatePassword", (req, res, next) => {
  let userObject = {
    _id: req.body._id,
    newPassword: req.body.newPassword
  }

  User.updatePassword(userObject)
  .then(result => {
    res.json(result)
  })
  .catch(error => {
    res.json(error)
  })
})

module.exports = router
