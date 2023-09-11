import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText description={game?.description_raw!}></ExpandableText>
    </>
  );
};

export default GameDetailPage;
