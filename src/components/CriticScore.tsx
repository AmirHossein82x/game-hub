import { Badge } from '@chakra-ui/react';
import React from 'react'



interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
    const color = score > 90 ? 'green': score > 60 ? 'yellow': ''
  return (
    <Badge fontSize={14} paddingX={2} borderRadius={4} colorScheme={color}>{score}</Badge>
  )
}

export default CriticScore