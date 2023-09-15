import React, { useState, useEffect } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Header from './Header'
import MovieCard from './MovieCard'
import Loader from './Loader'
import Message from './Message'
import axios from 'axios'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const apiKey = process.env.REACT_APP_API_KEY

  const fetchMovies = async () => {
    setLoading(true)

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1&per_page=10`
      )
      setData(response.data.results)
      setLoading(false)

      console.log(data)
    } catch (error) {
      setLoading(false)
      setError(error?.error)
    }
  }
  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <Box className='banner'>
        <Header />
        <Box className='card-container'>
          <h3 className='card-header'>John Wick 3: Parabellum</h3>
          <Box className='card-body-logo'>
            <span className='imdb-wrapper'>
              <img src='imdb.png' alt='imdb logo' />
              <p>86.0/100</p>
            </span>
            <span className='tomato-wrapper'>
              <img src='tomato.png' alt='tomato logo' />
              <p>97%</p>
            </span>
          </Box>
          <Box className='card-body-text'>
            <p>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
          </Box>
          <Box className='card-footer-button'>
            <button className='button-play'>
              <i
                class='fa-solid fa-circle-play'
                style={{ color: 'white' }}
                id='button-play-icon'></i>
              <h4 className='button-text'>WATCH TRAILER</h4>
            </button>
          </Box>
        </Box>
      </Box>
      <Container>
        <Box className='featured-movies-container'>
          <Box className='featured-header-wrapper'>
            <h2 className='featured-header-text'>Featured Movie</h2>
            <span className='see-more-wrapper'>
              <p>See more</p>
              <i className='fa-solid fa-angle-right'></i>
            </span>
          </Box>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Box className='list-movie-container'>
              {data?.slice(0, 10)?.map((movie) => (
                <Box key={movie.id} className='movie-card-container'>
                  <MovieCard movie={movie} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </>
  )
}

export default Home
