import axios from 'axios'

import {FiEdit} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import {HiHeart} from 'react-icons/hi'

import './styles.css'

function FavoriteCarCard(props){

  function handleRemoveFavorite(){
    axios.post(`http://localhost:4731/remove-favorite/${props.id}`, {
      id: props.id
    }).then(response=>{
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

  return(
    <div className='card' style={{backgroundColor: props.color}}>
      <div className='header'>
        <FiEdit onClick={()=>alert('editar as infos desse objeto no database')} className='header-icons'/>
        <GrClose onClick={()=>handleDelete()} className='header-icons'/>
        <HiHeart  onClick={()=> handleRemoveFavorite()} className='header-icons'/>
      </div>
      <div className='content'>
        <p><strong>{props.name}</strong></p>
        <p><strong>Preço:</strong> {props.price}</p>
        <p><strong>Descrição:</strong> {props.description}</p>
        <p><strong>Ano:</strong> {props.year}</p>
        {/* <p><strong>Cor:</strong> {props.color}</p> */}
      </div>
    </div>
  )
}

export default FavoriteCarCard