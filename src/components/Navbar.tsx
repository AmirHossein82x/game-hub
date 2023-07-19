import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SeachInput from './SeachInput'
const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SeachInput></SeachInput>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default Navbar