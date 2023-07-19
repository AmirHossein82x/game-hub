import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SeachInput from './SeachInput'

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SeachInput onSearch={onSearch}></SeachInput>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default Navbar