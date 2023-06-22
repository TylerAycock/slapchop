const express = require(`express`)
const cors = require(`cors`)
const path = require(`path`)

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.use(express.static(`${__dirname}/public`))

app.get('/',(req,resp)=>{
    resp.status(200).sendFile(path.join(__dirname, '../public/landingpage.html'))
})

app.listen(4000, () => console.log(`server running on 4000`))