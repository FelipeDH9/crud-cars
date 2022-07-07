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

// app.post('/register', async function (request, response) {
//   const { name } = request.body
//   const { brand } = request.body
//   const { year } = request.body
//   const { description } = request.body
//   const { price } = request.body
//   const { car_id } = request.body
//   const { color } = request.body

//   const sql =
//     'INSERT INTO car_announcements (name, brand, year, description, price, car_id, color) VALUES ( ?, ?, ?, ?, ?, ?, ?)'

//   database.query(
//     sql,
//     [name, brand, year, description, price, car_id, color],
//     (error, result) => {
//       console.log(error)
//     }
//   )
// })

app.listen(port, () => {
  console.log(
    `🔥 Server started on port http://localhost:${port} at ${new Date()}`
  )
})
