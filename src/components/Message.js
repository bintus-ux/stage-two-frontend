import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const Message = () => {
  return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Loading error!</AlertTitle>
      <AlertDescription>Error encountered.</AlertDescription>
    </Alert>
  )
}

export default Message
