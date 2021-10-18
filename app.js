const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const express = require('express')
const AppRouter = require('./routes/AppRouter')

// const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(process.env.PORT || 3001),
  function () {
    var port = server.address().port
    console.log('Express is working on port ' + port)
  }
