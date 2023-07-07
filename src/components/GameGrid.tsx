import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../assets/hooks/useGames';
import GameCard from './GameCard';



const GameGrid = () => {
    const {games, error} = useGames()
   
  return (
    <>
    <Text>{error && <p>{error}</p>}</Text>
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={10} spacing={10}>
        {games.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid