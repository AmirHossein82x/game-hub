import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../assets/hooks/usePlaltforms";
import { Platform } from "../assets/hooks/useGames";



const SortSelector = () => {
  const { data, error } = usePlatforms();
  if (error) {
    return null;
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown></BsChevronBarDown>}>
        sort
      </MenuButton>
      <MenuList>
       <MenuItem>item1</MenuItem>
       <MenuItem>name</MenuItem>
       <MenuItem>data</MenuItem>
       <MenuItem>refrence</MenuItem>
       <MenuItem>saff</MenuItem>
       <MenuItem>gsgs</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
