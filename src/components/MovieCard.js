import React, { useState } from 'react'
import { Box, Card, Text, Image, CardBody, Link } from '@chakra-ui/react'

const MovieCard = ({ movie }) => {
  const [likeButton, setLikeButton] = useState(false)

  const likeFunctionality = () => {
    if (!likeButton) {
      setLikeButton(true)
    } else {
      setLikeButton(false)
    }
  }

  return (
    <Card data-testid='movie-card'>
      <CardBody>
        <Box className='img-container'>
          <Link href={`/movies/${movie.id}`}>
            <Image
              className='mapped-image'
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              borderRadius='lg'
              loading='lazy'
              mt='7'
              data-testid='movie-poster'
            />
          </Link>
          <i
            className='fa-solid fa-heart fa-xl like-icon'
            id={likeButton ? 'heart-icon' : 'void-heart-icon'}
            onClick={likeFunctionality}></i>
        </Box>
        <Link href={`/movies/${movie.id}`}>
          <h5 data-testid='movie-title' className='card-movie-name'>
            {movie.title}
          </h5>
        </Link>
        <Box className='card-body-logo'>
          <span className='imdb-wrapper'>
            <img src='imdb.png' alt='imdb logo' />
            <p>{movie.vote_average}/10.0</p>
          </span>
          <span className='tomato-wrapper'>
            <img src='tomato.png' alt='tomato logo' />
            <p>97%</p>
          </span>
        </Box>
        <Text data-testid='movie-release-date' className='release-date-wrapper'>
          {movie.release_date}
        </Text>
      </CardBody>
    </Card>
  )
}

export default MovieCard
