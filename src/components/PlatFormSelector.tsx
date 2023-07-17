import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../assets/hooks/usePlaltforms";
import { Platform } from "../assets/hooks/useGames";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}


const PlatFormSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();
  if (error) {
    return null;
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown></BsChevronBarDown>}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
