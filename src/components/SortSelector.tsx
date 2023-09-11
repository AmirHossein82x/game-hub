import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlaltforms";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const { data, error } = usePlatforms();
  const sort = useGameQueryStore((s) => s.gameQuery.sort);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  if (error) {
    return null;
  }
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-added", label: "data added" },
    { value: "created", label: "created" },
    { value: "-updated", label: "updated" },
    { value: "-rating", label: "rating" },
    { value: "metacritc", label: "Popularity" },
  ];

  const currentSortOrder = sortOrders.find((item) => item.value === sort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown></BsChevronBarDown>}>
        Order by: {currentSortOrder?.label || "Relevent"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            onClick={() => setSortOrder(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
