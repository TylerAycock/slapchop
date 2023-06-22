const express = require(`express`)
const cors = require(`cors`)
const path = require(`path`)

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))





app.listen(4000, console.log(`Up and running on good ol 4000`))