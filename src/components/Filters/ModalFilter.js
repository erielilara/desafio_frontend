import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import './Filters.css'
import { useDispatch } from 'react-redux'
import { filterGenre, filterPlatforms } from '../../redux/actions'

function MyVerticallyCenteredModal (props) {
  const dispatch = useDispatch()

  const handleFilterGenre = (e) => {
    e.preventDefault()
    setTimeout(() => {
      dispatch(filterGenre(e.target.value))
    }, 500)
    setTimeout(() => {
      props.onHide()
    }, 700)
  }
  const handleFilterPlatform = (e) => {
    e.preventDefault()
    setTimeout(() => {
      dispatch(filterPlatforms(e.target.value))
    }, 500)
    setTimeout(() => {
      props.onHide()
    }, 700)
  }
  return (

    <Modal
      {...props}
    >
      <Modal.Body className='modal_container'>
        <h4 className='title_modal'>Aplica el filtro para encontrar los videojuegos con tu género favorito</h4>
        <Col className='genre_container'>
          <h5 className='genre_title'>Género</h5>
          <Form.Select id='select_genre' onChange={(e) => handleFilterGenre(e)}>
            <option>Selecciona</option>
            <option value='Action'>Action</option>
            <option value='Indie'>Indie</option>
            <option value='Adventure'>Adventure</option>
            <option value='RPG'>RPG</option>
            <option value='Strategy'>Strategy</option>
            <option value='Shooter'>Shooter</option>
            <option value='Casual'>Casual</option>
            <option value='Simulation'>Simulation</option>
            <option value='Sports'>Sports</option>
            <option value='Racing'>Racing</option>
            <option value='Fighting'>Fighting</option>
            <option value='Puzzle'>Puzzle</option>
            <option value='Platformer'>Platformer</option>
          </Form.Select>
        </Col>
        <Col className='genre_container'>
          <h5 className='genre_title'>Plataforma</h5>
          <Form.Select id='select_genre' onChange={(e) => handleFilterPlatform(e)}>
            <option>Selecciona</option>
            <option value='Xbox One'>Xbox One</option>
            <option value='Xbox 360'>Xbox 360</option>
            <option value='Xbox Series S/X'>Xbox Series S/X</option>
            <option value='PC'>PC</option>
            <option value='PlayStation 3'>PlayStation 3</option>
            <option value='PlayStation 4'>PlayStation 4</option>
            <option value='PlayStation 5'>PlayStation 5</option>
            <option value='macOS'>macOS</option>
            <option value='Nintendo Switch'>Nintendo Switch</option>
            <option value='Linux'>Linux</option>
            <option value='Android'>Android</option>
            <option value='Nintendo 3DS'>Nintendo 3DS</option>
            <option value='Wii U'>Wii U</option>
          </Form.Select>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Col className='container_footer'>
          <Button id='close_button' onClick={props.onHide}>Cerrar</Button>
          <Button id='filters_buttons' onClick={props.onHide}>Aplicar filtros</Button>
        </Col>
      </Modal.Footer>
    </Modal>
  )
}
export default MyVerticallyCenteredModal
