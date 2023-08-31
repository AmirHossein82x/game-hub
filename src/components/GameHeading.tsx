import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import UseGenres, { Genre } from '../assets/hooks/useGenres';
import usePlatforms from '../assets/hooks/usePlaltforms';
import usePlatform from '../assets/hooks/usePlatform';
import useGenre from '../assets/hooks/useGenre';


interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  const {data: genres} = UseGenres();
  const platform = usePlatform(gameQuery.platformId)
  const genre = useGenre(gameQuery.genreId)
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading marginY={5} fontSize={'5xl'} as={'h1'}>{heading}</Heading>
  )
}

export default GameHeading