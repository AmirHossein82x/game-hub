import { Text } from '@chakra-ui/react';
import useGames from '../assets/hooks/useGames';



const GameGrid = () => {
    const {games, error} = useGames()
   
  return (
    <>
    <Text>{error && <p>{error}</p>}</Text>
    <ul>
        {games.map((game) => <li key={game.id} value={game.name}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid