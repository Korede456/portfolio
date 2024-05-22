import React from "react";
import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Flex,
  Heading,
  Spacer,
  Box,
  Link,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex align="center" direction="row" w="100%" h="50px">
      <Heading>Kored Thompson</Heading>
      <Spacer />
      <Flex w="40%" display={{ base: "none", sm: "none", md: "flex", lg: "flex" }} direction="row" align="center" justify="space-between">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">My Skills</Link>
        <Link href="#projects">Projects</Link>
      </Flex>
      <Box display={{ sm: "block", md: "none", lg: "none" }}>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          <IoMenu />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Header;
