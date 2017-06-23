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
  // encrypt password
  userObject.password = bcrypt.hashSync(userObject.password, 10)

  //save user
  return new Promise((resolve, reject) => {
    userObject.save().then(result => {
      if(result == null) {
        reject({success: false, message: "User creation failed", data: result})
      } else {
        resolve({success: true, message: "User created successfully", data: result})
      }
    })
  })
}

module.exports.comparePassword = function(userObject) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userObject.password, userObject.hash).then((result) => {
      if(result) {
        resolve({success: true, message: "Passwords match"})
      } else {
        reject({success: false, message: "Passwords do not match"})
      }
    });
  })
}

module.exports.deleteOne = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).remove().then(result => {
      if(JSON.parse(result).n != 1) {
        reject({success: false, message: "Failed to delete user", data: result})
      } else {
        resolve({success: true, message: "User deleted successfully", data: result})
      }
    })
  })
}

module.exports.exists = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).then(result => {
      if(result == null) {
        resolve({success: true, message: "User does not exist", data: result})
      } else {
        reject({success: false, message: "User already exists", data: result})
      }
    })
  })
}

module.exports.getUser = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).then(result => {
      if(result == null) {
        reject({success: false, message: "User does not exist", data: result})
      } else {
        resolve({success: true, message: "User found", data: result})
      }
    })
  })
}

module.exports.updateUser = function(userObject) {
  return new Promise((resolve, reject) => {
    User.update({"_id": userObject._id}, userObject).then(result => {
      if(result.nModified == 0) {
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
  return new Promise((resolve, reject) => {
    let hashedPassword = bcrypt.hashSync(userObject.newPassword, 10);
    userObject.password = hashedPassword
    User.update({"_id": userObject._id}, {password: userObject.password}).then(result =>{
      if(result.nModified >= 1) {
        resolve({success: true, message: "Password updated", data: result})
      } else {
        reject({success: false, message: "Password update failed", data: result})
      }
    })
  })
}
