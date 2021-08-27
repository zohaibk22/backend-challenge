const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

require('dotenv/config')

app.use(bodyParser.json())