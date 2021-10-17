const express = require('express')
const mongoose = require('mongoose')
let cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8082

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true })
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

const professorRouter = require('./routes/professor')
app.use('/professor', professorRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))

