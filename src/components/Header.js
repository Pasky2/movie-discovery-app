import React from 'react'
// import axios from 'axios';
import {  Container, Navbar, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// const API_KEY = '068ccc0956857d96f88cfe7582410c05';
// const BASE_URL = 'https://api.themoviedb.org/3';


const Search = ({searchQuery, setSearchQuery, setSearchResults, searchResults, setLoading, fetchMovies}) => {
  
  // const handleSearch = () => {
  //   setLoading(true);
  //   // topMovies.filter ((movie) => {
  //   //   return movie.toLowerCase() === ''
  //   //   ? movie
  //   //   :
  //   //   setLoading(false);
  //   //   movie.title.toLowerCase().includes(searchQuery);
  //   //   setSearchResults(searchQuery);
      
  //   // })
  //   axios
  //     .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1`)
  //     .then((response) => {
  //       setSearchResults(response.data.results);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching search results:', error);
  //       setLoading(false);
  //     });
  // };


  return (
    <>
      <Navbar className="bg-body-transparent ">
        <Container className='mt-4'>
          <Navbar.Brand href="/" className='text-white'>
            <img
              alt=""
              src="../src/assets/Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MovieBox
          </Navbar.Brand>
        <Form inline>
        <InputGroup>
          <Form.Control
          className='bg-transparent text-white p-1 w-75'
            placeholder="Search..."
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
           onKeyUp={() => fetchMovies(searchQuery)}
          />
          {/* <InputGroup.Text id="basic-addon1" onClick={handleSearch}><button className='btn '>Send</button></InputGroup.Text> */}
        </InputGroup>
      </Form>

      <a href='/' className='text-white text-decoration-none'>Sign in</a>
        </Container>
      </Navbar>

    </>
  )
}

export default Search
