import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { TbListSearch } from 'react-icons/tb'

import CarCard from '../../components/CarCard/CarCard'
import FavoriteCarCard from '../../components/FavoriteCarCard/FavoriteCarCard'

import './styles.css'

function Home() {
  const [cars, setCars] = useState([])
  const [favoriteCars, setFavoriteCars] = useState([])

  function searchDatabase() {
    axios.get('http://localhost:4731/get-data').then(response => {
      console.log(response.data)
      setCars(response.data)
      console.log('cars', cars)
    })
    // nessa função vamos buscar na database inteira e atribuir as linhas dentro desse array
    // se tal linha tiver o is_favorite como 1 então ela será colocada dentro do estado favoriteCars, que será mapeada na seção favoritos
    // essa função será feita no useEffect, para pegar na database sempre que atualizar a página
    console.log('buscar no banco de dados')
  }

  useEffect(() => {
    searchDatabase()
  }, [])

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
          <a href="/car-register" className="button">
            <strong>+</strong> ADICIONAR
          </a>
        </div>

        <div className="favorites">
          <h2 className="title">Meus Favoritos</h2>
          <p>
            Map para pegar apenas os que são favoritos, será uma propriedade do
            objeto na database
          </p>
          <div className="cards-wrapper">
            {cars?.map(
              car =>
                car.is_favorite && (
                  <CarCard
                    key={car.id}
                    name={car.name}
                    price={car.price}
                    description={car.description}
                    year={car.year}
                    color={car.color}
                  />
                )
            )}
          </div>
        </div>
        <div className="my-car-announces">
          <h2 className="title">Meus Anúncios</h2>
          <div className="cards-wrapper">
            {cars?.map(
              car =>
                !car.is_favorite && (
                  <CarCard
                    key={car.car_id}
                    name={car.name}
                    price={car.price}
                    description={car.description}
                    year={car.year}
                    color={car.color}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
