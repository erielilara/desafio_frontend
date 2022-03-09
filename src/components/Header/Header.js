import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <Container className='navbar'>
      <Navbar.Brand href='/'>
        <img
          src='/assets/houmLogo.svg'
          width='100'
          height='50'
          className='logo'
          alt='Houm'
        />
      </Navbar.Brand>
      <Nav.Link id='link' href='https://www.linkedin.com/in/erielilara/'>Mi cuenta</Nav.Link>
    </Container>

  )
}

export default Header
