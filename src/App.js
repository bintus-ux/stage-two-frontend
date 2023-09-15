import { Box } from '@chakra-ui/react'
import Home from './components/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import MovieDetailPage from './components/MovieDetailPage'

const App = () => {
  return (
    <Box className='layout'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<MovieDetailPage />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
