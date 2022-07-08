import axios from 'axios'
import { useEffect, useState } from 'react'

import {FiEdit} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import {HiOutlineHeart} from 'react-icons/hi'

import './styles.css'

function CarCard(props){
  const [fontColor, setFontColor] = useState()
  const [cardColor, setCardColor] = useState()

  function handleFavorite() {
    axios.post(`http://localhost:4731/favorite/${props.id}`, {
        id: props.id
      })
      .then(response => {
        console.log(response)
      })
    window.location.href = '/'
  }

  function handleDelete(){
    axios.post(`http://localhost:4731/delete/${props.id}`, {
      id: props.id
    }).then(response=>{
      console.log(response)
    })
    window.location.href = '/'
  }

  function changeColor(){
    setCardColor(props.color)
    if(cardColor === '#646363'){
      setFontColor('#ffffff')
    } else{
      setFontColor('#000000')
    }
  }
  
  useEffect(() => {
    changeColor()
  }, [])

  return(
    <div className='card' style={{backgroundColor: props.color}}>
      <div className='header'>
        <FiEdit onClick={()=>alert('editar as infos desse objeto no database')} className='header-icons'/>
        <GrClose onClick={()=>handleDelete()} className='header-icons'/>
        <HiOutlineHeart  onClick={()=>handleFavorite()} className='header-icons'/>
      </div>
      <div className='content'>
        <p style={{color: fontColor}}><strong>{props.name}</strong></p>
        <p style={{color: fontColor}}><strong>Preço:</strong> {props.price}</p>
        <p style={{color: fontColor}}><strong>Descrição:</strong> {props.description}</p>
        <p style={{color: fontColor}}><strong>Ano:</strong> {props.year}</p>
        {/* <p><strong>Cor:</strong></p> */}
      </div>
    </div>
  )
}

export default CarCard