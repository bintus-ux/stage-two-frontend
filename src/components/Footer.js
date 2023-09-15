import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container>
      <footer className='footer-wrapper'>
        <Box className='footer'>
          <Box className='socials-wrapper'>
            <i class='fa-brands fa-facebook fa-2xl'></i>
            <i class='fa-brands fa-instagram fa-2xl'></i>
            <i class='fa-brands fa-twitter fa-2xl'></i>
            <i class='fa-brands fa-youtube fa-2xl'></i>
          </Box>
          <Box className='footer-info-wrapper'>
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
          </Box>
          <Text fontSize='20px'>&copy; 2023 MovieBox by Bintus</Text>
        </Box>
      </footer>
    </Container>
  )
}

export default Footer
