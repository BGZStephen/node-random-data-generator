const CarManufacturer = require('./model')

module.exports.process = (req) => {
  return new Promise((resolve, reject) => {
    let query = req.filter(function (item) {
      return item['data-type'] == 'CarManufacturer'
    });

    CarManufacturer.getAll()
    .then(apiResult => {
      return randomiseData(apiResult.data, query[0].volume)
    })
    .then(randomData => {
      resolve(randomData)
    })
  })
}

let randomiseData = (apiResult, volume) => {
  randomDataArray = []
  for(let i = 0; i < volume; i++) {
    let randomNumber = Math.floor(Math.random() * apiResult.length)
    let randomDataObject = {"CarManufacturer": apiResult[randomNumber].name}
    randomDataArray.push(randomDataObject)
  }
  return randomDataArray
}
