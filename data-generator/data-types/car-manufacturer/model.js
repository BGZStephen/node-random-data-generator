const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const Promise = require('bluebird')

const CarManufacturerSchema = mongoose.Schema({
  createdOn: Date,
  name: String
})

const CarManufacturer = module.exports = mongoose.model('CarManufacturer', CarManufacturerSchema)

module.exports.create = function(carManufacturerObject) {
  return new Promise((resolve, reject) => {
    carManufacturerObject.save().then(result => {
      if(result == null) {
        reject({success: false, message: "Car manufacturer creation failed", data: result})
      } else {
        resolve({success: true, message: "Car manufacturer created successfully", data: result})
      }
    })
  })
}

module.exports.deleteOne = function(carManufacturerObject) {
  return new Promise((resolve, reject) => {
    CarManufacturer.findOne(carManufacturerObject).remove().then(result => {
      if(JSON.parse(result).n != 1) {
        reject({success: false, message: "Failed to delete car manufacturer", data: result})
      } else {
        resolve({success: true, message: "Car manufacturer deleted successfully", data: result})
      }
    })
  })
}

module.exports.exists = function(carManufacturerObject) {
  return new Promise((resolve, reject) => {
    CarManufacturer.findOne(carManufacturerObject).then(result => {
      if(result == null) {
        resolve({success: true, message: "Car manufacturer does not exist", data: result})
      } else {
        reject({success: false, message: "Car manufacturer already exists", data: result})
      }
    })
  })
}

module.exports.get = function(carManufacturerObject) {
  return new Promise((resolve, reject) => {
    CarManufacturer.findOne(carManufacturerObject).then(result => {
      if(result == null) {
        reject({success: false, message: "Car manufacturer does not exist", data: result})
      } else {
        resolve({success: true, message: "Car manufacturer found", data: result})
      }
    })
  })
}

module.exports.getAll = function(carManufacturerObject) {
  return new Promise((resolve, reject) => {
    CarManufacturer.find({}).then(result => {
      if(result == null) {
        reject({success: false, message: "Car manufacturers not found", data: result})
      } else {
        resolve({success: true, message: "Car manufacturers found", data: result})
      }
    })
  })
}

module.exports.updateCarManufacturer = function(carManufacturerObject) {
  return new Promise((resolve, reject) => {
    CarManufacturer.update({"_id": carManufacturerObject._id}, carManufacturerObject).then(result => {
      if(result.nModified == 0) {
        resolve({success: true, message: "Nothing to update"})
      } else if (res.nModified >= 1) {
        resolve({success: true, message: "Car manufacturer updated", data: result})
      } else {
        reject({success: false, message: "Car manufacturer updated failed", data: result})
      }
    })
  })
}
