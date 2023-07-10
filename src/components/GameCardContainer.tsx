import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'


interface Props {
    children: ReactNode;
}

const GameCardContainer = ({children} : Props) => {
  return (
    <Box width={300} borderRadius={10} overflow={'hidden'}>
        {children}
    </Box>

  )
}

export default GameCardContainer