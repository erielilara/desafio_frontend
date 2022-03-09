import Pagination from 'react-bootstrap/Pagination'
import React from 'react'
import './Paginate.css'

export const Paginate = ({ currentPage, setCurrentPage, pages, videogames, videogamesPerPage }) => {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(videogames / videogamesPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <Pagination>
      {currentPage > 1 ? <Pagination.Prev id='pagination' onClick={prevPage} /> : null}
      {pageNumbers && pageNumbers.map(number => (
        <Pagination.Item id='pagination' key={number} onClick={() => pages(number)}>{number}</Pagination.Item>
      ))}
      {currentPage < Math.ceil(videogames / videogamesPerPage) ? <Pagination.Next id='pagination' onClick={nextPage} /> : null}
    </Pagination>
  )
}
export default Paginate
