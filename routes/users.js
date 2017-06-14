const async = require('asyncawait/async');
const await = require('asyncawait/await');
const config = require('../config/database');
const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const router = express.Router()
const User = require("../models/user")

router.post("/authenticate", (req, res, next) => {

})

router.post("/create", (req, res, next) => {

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
