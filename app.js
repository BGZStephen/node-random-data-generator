const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/database')

// mongoose db connection
mongoose.connect(config.database)

// on connection show connection message
mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${config.database}`)
})

// on error, log error
mongoose.connection.on('error', (err) => {
  console.log(`Error: ${err}`)
})

const app = express()

// use cors
app.use(cors())

// user body parser
app.use(bodyParser.json())

// static folder for public views
app.use(express.static(path.join(__dirname, 'public')))

// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
