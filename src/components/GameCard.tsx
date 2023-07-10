import React from "react";
import { Game } from "../assets/hooks/useGames";
import CriticScore from "./CriticScore";
import Platformiconlist from "./Platformiconlist";
import { Card, Image, Heading, CardBody, Text, HStack } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="30px">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <Platformiconlist
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></Platformiconlist>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
