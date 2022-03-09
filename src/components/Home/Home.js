import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getVideoGames } from '../../redux/actions'
import { Container } from 'react-bootstrap'
import Cards from '../Cards/Cards'
import './Home.css'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoGames())
  }, [])

  return (
    <Container className='container_home'>
      <Cards />
    </Container>
  )
}
export default Home
