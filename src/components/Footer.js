import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Footer = () => {
  return (
    <div className='col-4 m-auto mt-5'>
      <div className='d-flex justify-content-evenly mb-4'>
      <Link to='#' className='text-decoration-none text-dark'><i className="bi bi-facebook"></i></Link>
      <Link to='#' className='text-decoration-none text-dark'><i className="bi bi-instagram"></i></Link>
      <Link to='#' className='text-decoration-none text-dark'><i className="bi bi-twitter"></i></Link>
      <Link to='#' className='text-decoration-none text-dark'><i className="bi bi-youtube"></i></Link>
      </div>
      <div className='d-flex justify-content-evenly mb-3'>
        <Link to='#' className='text-decoration-none text-dark'>Conditions of Use</Link>
        <Link to='#' className='text-decoration-none text-dark'>Privacy & Policy</Link>
        <Link to='#' className='text-decoration-none text-dark'>Press Room</Link>
      </div>
      <p className='text-secondary'><i class="bi bi-c-circle"></i> 2023 MovieBox by Osemene Pascal</p>
    </div>
  )
}

export default Footer
