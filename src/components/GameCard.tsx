import React from 'react'
import { Game } from '../assets/hooks/useGames'
import Platformiconlist from './Platformiconlist'
import { Card, Image, Heading, CardBody, Text } from '@chakra-ui/react'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}></Image>
        <CardBody>

        <Heading fontSize='30px'>{game.name}</Heading>
        <Platformiconlist platforms={game.parent_platforms.map((p) => p.platform)}></Platformiconlist>
        
        </CardBody>
    </Card>
  )
}

export default GameCard