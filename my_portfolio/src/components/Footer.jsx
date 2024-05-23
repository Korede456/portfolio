import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { IoMail, IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      id="contact"
      w="100%"
      my="20"
      align="center"
      borderTop="1px solid gold"
      borderBottom="1px solid gold"
      pb="20"
    >
      <Heading my="20">Contact Me</Heading>
      <Flex
        w={{ base: "100%", md: "60%" }}
        align="center"
        justify="center"
        gap="10"
        wrap="wrap"
      >
        <Button w={{ base: "100%", md: "42%" }}>
          <IoMail />
          <Link href="mailto:koredethompson456@gmail.com" ml="5">
            koredethompson456@gmail.com
          </Link>
        </Button>
        <Button w={{ base: "100%", md: "42%" }}>
          <FaPhoneAlt />
          <Link href="tel:+2347033300647" ml="5">+2347033300647</Link>
        </Button>
        <Button w={{ base: "100%", md: "42%" }}>
          <IoLocation />
          Kubwa, Abuja, Nigeria
        </Button>
      </Flex>
    </Box>
  );
};

export default Footer;
