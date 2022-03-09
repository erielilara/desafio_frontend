import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Cards.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { GrGamepad } from 'react-icons/gr'
import { CgGames } from 'react-icons/cg'
import { SiGamejolt } from 'react-icons/si'
import Paginate from '../Pagination/Paginate'
import SearchBar from '../SearchBar/SearchBar'
import Filters from '../Filters/Filters'
import { BiGame } from 'react-icons/bi'
const Cards = () => {
  const videogames = useSelector(state => state.videogames)
  const [currentPage, setCurrentPage] = useState(1)
  const [videogamesPerPage, setvideogamesperPage] = useState(12)
  const LastVideogame = currentPage * videogamesPerPage
  const FirstVideogame = LastVideogame - videogamesPerPage
  const allPagVideogames = videogames.slice(FirstVideogame, LastVideogame)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container>
      <Row className='row_home'>
        <Col lg={7}><SearchBar /></Col>
        <Col lg={5}><Filters /></Col>
      </Row>
      <h1 className='title_1'>Videojuegos disponibles</h1>
      <Container className='card_container'>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {allPagVideogames.map(game => (
            <Col key={game.id}>
              <Card id='card' key={game.id}>
                <Card.Img id='card-img' variant='top' src={game.background_image} alt={game.name} />
                <Card.Title id='title'>{game.name}</Card.Title>
                <Card.Text id='text-1'><GrGamepad /> Rating: {game.rating}</Card.Text>
                <Card.Text id='text-2'><SiGamejolt /> Lanzamiento: {game.released}</Card.Text>
                <Card.Text id='text-1'><CgGames /> Géneros: {game.genres.map((e) => (`${'  • ' + e.name} `))}</Card.Text>
                <hr className='hr' />
                <Card.Text id='text-3'><BiGame />  Plataformas: {game.platforms.map((e) => (`${'  • ' + e.platform.name} `))} </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col id='pagination_container'>
            <Paginate setCurrentPage={setCurrentPage} currentPage={currentPage} videogames={videogames.length} videogamesPerPage={videogamesPerPage} pages={pages} />
          </Col>
        </Row>
      </Container>
    </Container>

  )
}
export default Cards
