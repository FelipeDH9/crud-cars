const express = require('express')
const bodyParser = require('body-parser')
// const database = require('./database')
const cors = require('cors')
const routes = require('./routes')

const app = express()
const port = 4731

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.get('/', function (request, response) {
  return response.json({
    message: 'Hooray! Welcome to our API!!!',
    timestamp: Date.now()
  })
})

app.listen(port, () => {
  console.log(
    `🔥 Server started on port http://localhost:${port} at ${new Date()}`
  )
})
