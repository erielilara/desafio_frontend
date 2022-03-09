import { Button, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import MyVerticallyCenteredModal from './ModalFilter'
import { BsFilter } from 'react-icons/bs'
import './Filters.css'

const Filters = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Col className='filter_container'>
      <>
        <Button id='filter_button' onClick={() => setModalShow(true)}><BsFilter /> Filtrar </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </Col>
  )
}
export default Filters
