import React from 'react'
import './styles.css'

import { IoMdArrowBack } from 'react-icons/io'

function CarRegister() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <a href="/">
            <IoMdArrowBack className="go-home-button" />
          </a>

          <div className="register-fields">
            <label>Nome:</label>
            <input type="text" name="car-name" placeholder="" />

            <label>Marca:</label>
            <input type="text" name="car-brand" placeholder="" />

            <label>Ano:</label>
            <input type="number" name="car-year" placeholder="" />

            <label>Descrição:</label>
            <input type="text" name="car-description" placeholder="" />

            <label>Preço:</label>
            <input type="number" name="car-price" placeholder="" />

            <label>Placa:</label>
            <input type="text" name="car-id" placeholder="" />

            <label>Cor:</label>
            <select onChange={() => {}}>
              <option name="empty">-</option>
              <option name="white">Branco</option>
              <option name="black">Preto</option>
              <option name="silver">Prata</option>
              <option name="red">Vermelho</option>
              <option name="blue">Azul</option>
              <option name="yellow">Amarelo</option>
            </select>

            <div>
              <button onClick={() => {}} className="button">
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
