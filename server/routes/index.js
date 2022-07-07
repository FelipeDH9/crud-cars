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

    const sql =
      'INSERT INTO car_announcements (name, brand, year, description, price, car_id, color) VALUES ( ?, ?, ?, ?, ?, ?, ?)'

    database.query(
      sql,
      [name, brand, year, description, price, car_id, color],
      (error, result) => {
        console.log(error)
      }
    )
  } catch (error) {
    return response.status(500).json({ message: error.message })
  }
})

module.exports = router
