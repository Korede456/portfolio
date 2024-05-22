import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Heading>Contact Me</Heading>
      <Flex>
        <Text>
          <Link href="mailto:koredethompson456@gmail.com">
            koredethompson456@gmail.com
          </Link>
        </Text>
        <Text>
          <Link href="tel:+2347033300647">+2347033300647</Link>
        </Text>
        <Text></Text>
      </Flex>
    </Box>
  );
};

export default Footer;
