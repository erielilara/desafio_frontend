import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideogamesByName } from '../../redux/actions'
import './SearchBar.css'
import { Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar () {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: ''
  })

  function handleOnChange (e) {
    e.preventDefault()
    setInput(e.target.value)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
    dispatch(getVideogamesByName(input))

    setInput({
      name: ''
    })
  }

  return (
    <Form>
      <Row>
        <Col>
          <InputGroup>
            <FormControl id='inlineFormInputGroup' placeholder='Buscar por nombre de videojuego o personaje' onChange={e => handleOnChange(e)} value={input.name} />
            <InputGroup.Text id='mb-2' onClick={e => handleOnSubmit(e)}><AiOutlineSearch id='button_search' /></InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
    </Form>

  )
}
