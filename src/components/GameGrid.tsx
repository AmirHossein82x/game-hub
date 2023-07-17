import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../assets/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../assets/hooks/useGenres";


interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;

}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      <Text>{error && <p>{error}</p>}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((item) => (
            <GameCardContainer  key={item}>
              {" "}
              <GameCardSkeleton></GameCardSkeleton>{" "}
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
