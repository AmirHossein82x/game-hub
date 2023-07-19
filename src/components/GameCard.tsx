import React from "react";
import { Game } from "../assets/hooks/useGames";
import CriticScore from "./CriticScore";
import Platformiconlist from "./Platformiconlist";
import { Card, Image, Heading, CardBody, Text, HStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Platformiconlist
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></Platformiconlist>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="25px">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
