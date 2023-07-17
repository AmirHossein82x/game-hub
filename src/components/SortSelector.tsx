import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../assets/hooks/usePlaltforms";
import { Platform } from "../assets/hooks/useGames";

interface Props {
    onSelectSort: (sortItem: string) => void;
    sortOrder: string | null;
}

const SortSelector = ({onSelectSort, sortOrder}: Props) => {

  const { data, error } = usePlatforms();
  if (error) {
    return null;
  }
  const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: '-name', label: 'Name'},
    {value: '-released', label: 'Released'},
    {value: '-added', label: 'data added'},
    {value: 'created', label: 'created'},
    {value: '-updated', label: 'updated'},
    {value: '-rating', label: 'rating'},
    {value: 'metacritc', label: 'Popularity'}
  ]

  const currentSortOrder = sortOrders.find((item) => item.value === sortOrder)
   

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown></BsChevronBarDown>}>
        Order by: {currentSortOrder?.label || 'Relevent'}
      </MenuButton>
      <MenuList>
       {sortOrders.map((item) => <MenuItem key={item.value} value={item.value} onClick={() => onSelectSort(item.value)}>{item.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
