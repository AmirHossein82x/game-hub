import { Grid, Show, GridItem, HStack, Box } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatFormSelector from "../components/PlatFormSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={"38px"}>
            <GameHeading></GameHeading>
            <HStack spacing={5}>
              <PlatFormSelector></PlatFormSelector>
              <SortSelector></SortSelector>
            </HStack>
          </Box>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
