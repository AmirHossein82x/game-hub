import { Grid, GridItem, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./assets/hooks/useGenres";
import PlatFormSelector from "./components/PlatFormSelector";
import { Platform } from "./assets/hooks/useGames";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null
}


const App = () => {
  // const [selectedGenre, setGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const [gameQuery, setGameQuery] =  useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selecredGenre={gameQuery.genre} onSelecteGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatFormSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}></PlatFormSelector>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
