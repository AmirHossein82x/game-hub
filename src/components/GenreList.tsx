import React from "react";
import UseGenres, { Genre } from "../assets/hooks/useGenres";
import useData from "../assets/hooks/useData";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = UseGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} value={genre.name} paddingY='5px'>
          <HStack>
          <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} borderRadius={8}></Image>
          <Text fontSize={"large"}>{genre.name}</Text>
          
          </HStack>

        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
