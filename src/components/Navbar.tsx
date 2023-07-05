import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default Navbar