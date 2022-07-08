import React, { useState } from 'react'
import './styles.css'
import axios from 'axios'

import { IoMdArrowBack } from 'react-icons/io'

function CarRegister() {
  const [name, setName] = useState()
  const [brand, setBrand] = useState()
  const [year, setYear] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [carId, setCarId] = useState()
  const [color, setColor] = useState()

  function submit() {
    axios
      .post('http://localhost:4731/register', {
        name,
        brand,
        year,
        description,
        price,
        car_id: carId,
        color
      })
      .then(response => {
        console.log(response)
      })
  }

  return (
    <div>
      <div className="main">
        <div className="container">
          <a href="/">
            <IoMdArrowBack className="go-home-button" />
          </a>

          <div className="register-fields">
            <label>Nome:</label>
            <input
              type="text"
              name="car-name"
              onChange={event => setName(event.target.value)}
            />

            <label>Marca:</label>
            <input
              type="text"
              name="car-brand"
              onChange={event => setBrand(event.target.value)}
            />

            <label>Ano:</label>
            <input
              type="number"
              name="car-year"
              onChange={event => setYear(event.target.value)}
            />

            <label>Descrição:</label>
            <input
              type="text"
              name="car-description"
              onChange={event => setDescription(event.target.value)}
            />

            <label>Preço:</label>
            <input
              type="number"
              name="car-price"
              onChange={event => setPrice(event.target.value)}
            />

            <label>Placa:</label>
            <input
              type="text"
              name="car-id"
              onChange={event => setCarId(event.target.value)}
            />

            <label>Cor:</label>
            <select onChange={event => setColor(event.target.value)}>
              <option name="empty">-</option>
              <option name="white" value={'Branco'}>
                Branco
              </option>
              <option name="black" value={'Preto'}>
                Preto
              </option>
              <option name="silver" value={'Prata'}>
                Prata
              </option>
              <option name="red" value={'Vermelho'}>
                Vermelho
              </option>
              <option name="blue" value={'Azul'}>
                Azul
              </option>
              <option name="yellow" value={'Amarelo'}>
                Amarelo
              </option>
            </select>

            <div>
              <button
                onClick={() => {
                  submit()
                }}
                className="button"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarRegister
