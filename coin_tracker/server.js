const express = require('express')
const logger = require('morgan')
const path = require('path')

const app = express()

app.use(logger('dev'))
app.use('/', express.static(path.join(__dirname, './src')))

app.get('/', (req, res) => {
  res.render('index.html')
})

const PORT = 3000
const handleListening = () => {
  console.log(`http://localhost:${PORT}`)
}

app.listen(PORT, handleListening)
