import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlaltforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";


const PlatFormSelector = () => {
  const { data, error } = usePlatforms();
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(platformId)

  const setPlatformId = useGameQueryStore(s => s.setPlatformId)
  
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
          <MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
