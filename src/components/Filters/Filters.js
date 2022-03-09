import { Button, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import MyVerticallyCenteredModal from './ModalFilter'
import { BsFilter } from 'react-icons/bs'
import './Filters.css'
import { useDispatch } from 'react-redux'
import { getVideoGames } from '../../redux/actions'

const Filters = () => {
  const [modalShow, setModalShow] = useState(false)
  const dispatch = useDispatch()

  const handleReset = (e) => {
    e.preventDefault()
    dispatch(getVideoGames())
  }

  return (
    <Col className='filter_container'>
      <>
        <Button id='filter_button' onClick={() => setModalShow(true)}><BsFilter /> Filtrar </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Button id='reset_button' onClick={e => handleReset(e)}>Reset</Button>
      </>
    </Col>
  )
}
export default Filters
