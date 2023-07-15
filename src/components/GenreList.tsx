import React from "react";
import UseGenres, { Genre } from "../assets/hooks/useGenres";
import useData from "../assets/hooks/useData";
import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  onSelecteGenre: (genre: Genre) => void;
  selecredGenre: Genre | null;
}

const GenreList = ({onSelecteGenre, selecredGenre}: Props) => {
  const { data, isLoading, error } = UseGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} value={genre.name} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            ></Image>
            <Button fontWeight={genre.id === selecredGenre?.id ? 'bold': 'normal'} variant='link' onClick={() => onSelecteGenre(genre)} fontSize={'20px'}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
