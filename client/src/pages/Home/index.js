import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { TbListSearch } from 'react-icons/tb'

import './styles.css'

function Home() {
  const [carProperty, setCarProperty] = useState()

  function print() {
    console.log(carProperty)
  }

  async function search() {
    console.log('TEstando git')
  }

  return (
    <div className="main">
      <div className="container">
        <div className="search-wrapper">
          <div className="input-wrapper">
            <AiOutlineSearch id="search-icon" />
            <input
              type="text"
              placeholder="Buscar"
              id="search-car-input"
              // onChange={value => setCarName(value.target.value)}
              onChange={() => {
                alert(
                  'quando digitar no campo é para filtar pelos veiculos que correspondem, ou seja, no onChange é para fazer o filtro por qualquer propriedade do veiculo, pode ser pode nome, preço, ano, cor'
                )
              }}
              tabIndex="1"
              autoFocus
            ></input>
          </div>

          <TbListSearch
            id="advanced-search-icon"
            onClick={() => {
              alert(
                'Irá para a busca avançada, onde pode colocar a marca, cor, ano, preço mínimo e máximo'
              )
            }}
            tabIndex="0"
          />
        </div>

        <div className="center">
          <button
            id="add-car-button"
            onClick={() => {
              alert(
                'Irá abrir um formulario para add o veiculo no bd e e criar um cartão'
              )
            }}
          >
            ADICIONAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
