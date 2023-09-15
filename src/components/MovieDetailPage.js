import React, { useState, useEffect } from 'react'
import { Image } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Logo from './Logo'
import Loader from './Loader'
import Message from './Message'
import axios from 'axios'

const MovieDetailPage = () => {
  const [loading, setLoading] = useState(false)
  const [movieData, setMovieData] = useState([])
  const [error, setError] = useState('')

  const apiKey = process.env.REACT_APP_API_KEY
  let { id } = useParams()

  const fetchMovie = async () => {
    setLoading(true)

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      )
      console.log(response.data)
      setMovieData(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error?.error)
    }
  }
  useEffect(() => {
    fetchMovie()
  }, [id])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <div className='movie-detail-container'>
        <div className='sidebar'>
          <div className='sidebar-logo'>
            <Logo />
            <h2>MovieBox</h2>
          </div>
          <div className='sidebar-tabs'>
            <i className='fa-solid fa-house'></i>
            <h2>Home</h2>
          </div>
          <div className='sidebar-tabs'>
            <i className='fa-solid fa-video'></i>
            <h2>Movies</h2>
          </div>
          <div className='sidebar-tabs'>
            <i className='fa-solid fa-tv'></i> <h2>TV Series</h2>
          </div>
          <div className='sidebar-tabs'>
            <i className='fa-regular fa-calendar-days'></i> <h2>Upcoming</h2>
          </div>
          <div className='info-wrapper'>
            <div className='info-text'>
              <p style={{ fontWeight: '600' }}>
                Play movie quizes and earn free tickets
              </p>
            </div>
            <div className='info-text'>
              <p style={{ fontSize: '12px', fontWeight: '500' }}>
                50k people are playing now
              </p>
            </div>
            <div className='info-button-wrapper'>
              <button className='info-button'>Start playing</button>
            </div>
          </div>
          <div className='sidebar-tabs'>
            <i className='fa-solid fa-arrow-right-from-bracket'></i>
            <h2>Log out</h2>
          </div>
        </div>
        <div className='movie-column'>
          <div className='movie-image-container'>
            <img
              className='movie-image'
              src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
              alt={movieData.title}
              borderRadius='lg'
              mt='7'
              data-testid='movie-poster'
            />
            <div className='video-play-overlay'>
              <img src='/Play.png' />
              <h2>Watch Trailer</h2>
            </div>
          </div>
          <div className='movie-detail-wrapper'>
            <div className='movie-detail-column'>
              <ul className='inline-list'>
                <li data-testid='movie-title'>{movieData.original_title}</li>
                <li data-testid='movie-release-date'>
                  {movieData.release_date?.split('-')[0]}
                </li>
                <li>{movieData.adult === true ? 'Adult' : 'PG-13'}</li>
                <li data-testid='movie-runtime'>{movieData.runtime}m</li>
                <div className='genre-container'>
                  {movieData?.genres?.map((genre) => (
                    <div key={genre.id} className='genre-wrapper'>
                      {genre.name}
                    </div>
                  ))}
                </div>
              </ul>
              <div>
                <p data-testid='movie-overview' className='movie-overview'>
                  {movieData.overview}
                </p>
              </div>
              <div>
                <p className='movie-cast'>
                  Director:{' '}
                  <span className='movie-cast-name'>Joseph Kosinskiv</span>
                </p>
                <p className='movie-cast'>
                  Writers :{' '}
                  <span className='movie-cast-name'>
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </span>
                </p>
                <p className='movie-cast'>
                  Stars :{' '}
                  <span className='movie-cast-name'>
                    Tom Cruise, Jennifer Connelly, Miles Teller
                  </span>
                </p>
              </div>
              <div className='button'>
                <h2>Top rated movie #65</h2>
                <span className='movie-award-section'>
                  <h3>Awards 9 nominations</h3>
                  <i class='fa-solid fa-chevron-down'></i>
                </span>
              </div>
            </div>
            <div className='movie-options-section'>
              <div className='star-rating-wrapper'>
                <i
                  class='fa-solid fa-star fa-lg'
                  style={{ color: 'rgb(254, 224, 29)' }}></i>
                <p>
                  <span>{movieData.vote_average}</span>|
                  {movieData.vote_count >= 1000 &&
                  movieData.vote_count < 1000000
                    ? (movieData.vote_count / 1000).toFixed(1) + 'K'
                    : movieData.vote_count}
                </p>
              </div>
              <button className='movie-showtimes-button'>
                <i className='fa-solid fa-ticket'></i>
                <p className='movie-ticket-text'>See Showtimes</p>
              </button>
              <button className='movie-options-button'>
                <i class='fa-solid fa-list'></i>
                <p className='movie-options-text'>More watch options</p>
              </button>
              <div className='movie-sample'>
                <Image src='/Rectangle 37.png' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetailPage
