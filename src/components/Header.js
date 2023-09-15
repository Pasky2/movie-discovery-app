import React from 'react'
import axios from 'axios';
import Logo from '../assets/Logo.png';
import  "../styles.css";
import {  Container, Navbar, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_KEY = '068ccc0956857d96f88cfe7582410c05';
const BASE_URL = 'https://api.themoviedb.org/3';


const Search = ({searchQuery, setSearchQuery, setSearchResults, searchResults, setLoading, setTopMovies}) => {
  
  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1`)
      .then((response) => {
        setTopMovies(response.data.results);
        console.log(searchResults);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
        setLoading(false);
      });
  };


  return (
    <>
      <Navbar className="bg-body-transparent ">
        <Container className='mt-4'>
          <Navbar.Brand href="/" className='text-white'>
            <img
              alt=""
              src={Logo}
              width="100"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          
        <Form inline>
      
          <input
          style={{width: '100%', outline: 'none', padding:'5px 20px'}}
          className='bg-transparent text-white form-control'
            placeholder="Search for movies..."
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
           onKeyUp={handleSearch}
          />
          {/* <InputGroup.Text id="basic-addon1" onClick={handleSearch}><button className='btn '>Send</button></InputGroup.Text> */}
      </Form>

      <a href='/' className='text-white text-decoration-none'>Sign in</a>
        </Container>
      </Navbar>

    </>
  )
}

export default Search
