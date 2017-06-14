const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema({
  createdOn: Date,
  email: {
    type: String,
    unique: true
  },
  firstName: String,
  lastName: String,
  password: String,
  username: {
    type: String,
    unique: true,
  },
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.create = function(userObject) {

}

module.exports.comparePassword = function(userObject) {

}

module.exports.deleteOne = function(userObject) {

}

module.exports.get = function(userObject) {

}

module.exports.update = function(userObject) {

}

module.exports.updatePassword = function(userObject) {

}
