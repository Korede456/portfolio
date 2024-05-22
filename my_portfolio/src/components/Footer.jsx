import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w="100%" my="20" align="center" borderTop="1px solid gold" borderBottom="1px solid gold" pb="20">
      <Heading my="20">Contact Me</Heading>
      <Flex
        w={{ base: "100%", md: "60%" }}
        align="center"
        justify="center"
        gap="10"
        wrap="wrap"
      >
        <Button w="40%">
          <Link href="mailto:koredethompson456@gmail.com">
            koredethompson456@gmail.com
          </Link>
        </Button>
        <Button w="40%">
          <Link href="tel:+2347033300647">+2347033300647</Link>
        </Button>
        <Button w="40%">Kubwa, Abuja, Nigeria</Button>
      </Flex>
    </Box>
  );
};

export default Footer;
