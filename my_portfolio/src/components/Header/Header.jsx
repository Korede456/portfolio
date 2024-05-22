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
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      align="center"
      direction="row"
      w="100%"
      h="100px"
      top="0"
      left="0"
      
      position="fixed"
      bg="#181A2A"
      zIndex={10}
      px={{ base: "2%", md: "5%", lg: "10%" }}
    >
      <Heading>Kored Thompson</Heading>
      <Spacer />
      <Flex
        w="40%"
        display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
        direction="row"
        align="center"
        justify="space-between"
      >
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
            <DrawerBody>
              <VStack>
                <Link href="#home" onClick={onClose}>
                  Home
                </Link>
                <Link href="#about" onClick={onClose}>
                  About
                </Link>
                <Link href="#skills" onClick={onClose}>
                  My Skills
                </Link>
                <Link href="#projects" onClick={onClose}>
                  Projects
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Header;
