import React from 'react'
import { Box } from '@chakra-ui/react'
import Logo from './Logo'

const Header = () => {
  return (
    <Box className='navbar-wrapper'>
      <Box className='logo-layout'>
        <Logo />
        <h2>MovieBox</h2>
      </Box>
      <Box className='searchbar-wrapper'>
        <input
          type='text'
          className='searchbar'
          placeholder='What do you wish to watch?...'
        />
        <span className='search-icon'>
          <i
            className='fa-solid fa-magnifying-glass fa-lg'
            style={{ color: 'white' }}></i>
        </span>
      </Box>
      <Box className='sign-in-wrapper'>
        <h4>Sign In</h4>
        <span className='tab-icon'>
          <i
            className='fa-solid fa-bars-staggered'
            style={{
              width: '24px',
              height: '24px',
              margin: '5px 5px',
            }}></i>
        </span>
      </Box>
    </Box>
  )
}

export default Header
