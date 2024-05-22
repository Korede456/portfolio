import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Heading>Contact Me</Heading>
      <Flex
        w={{ base: "100%", md: "60%" }}
        align="center"
        justify="center"
        gap="10"
      >
        <Text w="300" align="center">
          <Link href="mailto:koredethompson456@gmail.com">
            koredethompson456@gmail.com
          </Link>
        </Text>
        <Text w="300">
          <Link href="tel:+2347033300647">+2347033300647</Link>
        </Text>
        <Text w="300">Kubwa, Abuja, Nigeria</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
