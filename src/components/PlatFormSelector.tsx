import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../assets/hooks/usePlaltforms";
import { Platform } from "../assets/hooks/useGames";
import usePlatform from "../assets/hooks/usePlatform";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform?: number;
}


const PlatFormSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();
  const platform = usePlatform(selectedPlatform)
  if (error) {
    return null;
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown></BsChevronBarDown>}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
