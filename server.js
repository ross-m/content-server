const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const cors = require('cors')
const fs = require('fs-extra')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

app.get('/home', (req, res) => {
    const content = fs.readFileSync('./home_assets.txt', 'utf-8')
    return res.status(200).json({body: content})
})

app.get('/about', (req, res) => {
    const content = fs.readFileSync('./about_assets.txt', 'utf-8')
    return res.status(200).json({body: content})
})

app.get('/resume', (req, res) => {
    const content = fs.readFileSync('./resume_assets.txt', 'utf-8')
    return res.status(200).json({body: content})
})

app.listen(port, function() {
    console.log('CORS-enabled web server listening on port '+ port)
})