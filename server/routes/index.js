const express = require('express')
const database = require('../database')
const router = express()

router.post('/register', function (request, response) {
  try {
    const { name } = request.body
    const { brand } = request.body
    const { year } = request.body
    const { description } = request.body
    const { price } = request.body
    const { car_id } = request.body
    const { color } = request.body

    if (
      !name ||
      !brand ||
      !year ||
      !description ||
      !price ||
      !car_id ||
      !color
    ) {
      return response.status(401).json({ message: 'Please fill all fields!' })
    }

    if (name && brand && year && description && price && car_id && color) {
      const SQL =
        'INSERT INTO car_announcements (name, brand, year, description, price, car_id, color) VALUES ( ?, ?, ?, ?, ?, ?, ?)'

      database.query(
        SQL,
        [name, brand, year, description, price, car_id, color],
        (error, result) => {
          console.log(error)
        }
      )
      console.log('mandou para o banco')
    }
  } catch (error) {
    return response.status(500).json({ message: error.message })
  }
})

router.get('/get-data', function (request, response) {
  const SQL = 'SELECT * from car_announcements'
  database.query(SQL, (error, result) => {
    if (error) {
      console.log(error)
    } else {
      response.send(result)
    }
  })
})

router.post('/favorite/:id', (req, res) => {
  const { id } = req.params

  const SQL = 'UPDATE car_announcements SET is_favorite = 1 WHERE id = ?'

  database.query(SQL, id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
})

router.post('/remove-favorite/:id', (req, res) => {
  const { id } = req.params

  const SQL = 'UPDATE car_announcements SET is_favorite = 0 WHERE id = ?'

  database.query(SQL, id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
})

router.post('/delete/:id', (req, res) => {
  const { id } = req.params

  const SQL = 'DELETE FROM car_announcements WHERE id= ?'
  database.query(SQL, id, (err, result) => {
    if (err) {
      console.log(err)
    }
  })
})
module.exports = router
