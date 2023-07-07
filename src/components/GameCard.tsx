import React from 'react'
import { Game } from '../assets/hooks/useGames'
import { Card, Image, Heading, CardBody } from '@chakra-ui/react'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}></Image>
        <CardBody>

        <Heading fontSize='30px'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard