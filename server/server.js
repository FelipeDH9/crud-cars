const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 4731

app.use(bodyParser.json())

app.get('/', function (request, response) {
  return response.json({
    message: 'Welcome to our API!!!',
    timestamp: Date.now()
  })
})

app.listen(port, () => {
  console.log(
    `🔥 Server started on port http://localhost:${port} at ${new Date()}`
  )
})
