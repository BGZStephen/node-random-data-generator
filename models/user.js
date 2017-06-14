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
  return new Promise((resolve, reject), => {

    let hashedPassword = bcrypt.hashSync(userObject.password, 10);
    userObject.password = hashedPassword

    userObject.save().then(res => {
      if(res == null) {
        reject({success: false, message: "Failed to save User", data: res})
      } else {
        resolve({success: true, message: "User created successfully", data: res})
      }
    })
  })
}

module.exports.comparePassword = function(userObject) {
  return new Promise((resolve, reject), => {
    bcrypt.compareSync(userObject.password, userObject.hash).then(res => {
      if(res) {
        resolve({success: true, message: "Passwords match"})
      } else {
        reject({success: false, message: "Passwords do not match"})
      }
    })
  })
}

module.exports.deleteOne = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).remove().then(res => {
      if(JSON.parse(result).n != 1) {
        reject({success: false, message: "Failed to delete user", data: result})
      } else {
        resolve({success: true, message: "User deleted successfully", data: result})
      }
    })
  })
}

module.exports.get = function(userObject) {
  return new Promise((resolve, reject), => {
    User.find(userObject).then(res => {
      if(res.length == 0} {
        reject({success: false, message: "User(s) not found", data: res})
      } else {
        resolve({success: true, message: "User(s) found", data: res})
      }
    })
  })
}

module.exports.update = function(userObject) {
  return new Promise((resolve, reject), => {
    User.update({"_id": userObject._id}, userObject).then(res => {
      if(res.nModified == 0) {
        resolve({success: true, message: "Nothing to update"})
      } else if (res.nModified >= 1) {
        resolve({success: true, message: "User updated", data: result})
      } else {
        reject({success: false, message: "User updated failed", data: result})
      }
    })
  })
}

module.exports.updatePassword = function(userObject) {
  return new Promise((resolve, reject), => {
    let hashedPassword = bcrypt.hashSync(userObject.newPassword, 10);
    userObject.password = hashedPassword
    User.update({"_id": userObject._id}, {password: userObject.password}).then(res =>{
      if(res.nModified >= 1) {
        resolve({success: true, message: "Password updated", data: result})
      } else {
        reject({success: false, message: "Password update failed", data: result})
      }
    })
  })
}
