import './styles.css'
import {FiEdit} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import {HiHeart} from 'react-icons/hi'

function FavoriteCarCard(props){
  return(
    <div className='card'>
      <div className='header'>
        <FiEdit onClick={()=>alert('editar as infos desse objeto no database')} className='header-icons'/>
        <GrClose onClick={()=>alert('deletar esse objeto do database')} className='header-icons'/>
        <HiHeart  onClick={()=>alert('tirar 1 na coluna is_favorite no database')} className='header-icons'/>
      </div>
      <div className='content'>
        <p><strong>{props.name}</strong></p>
        <p><strong>Preço:</strong> {props.price}</p>
        <p><strong>Descrição:</strong> {props.description}</p>
        <p><strong>Ano:</strong> {props.year}</p>
        <p><strong>Cor:</strong> {props.color}</p>
      </div>
    </div>
  )
}

export default FavoriteCarCard