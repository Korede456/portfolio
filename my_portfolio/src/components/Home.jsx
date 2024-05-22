import { Box, Button, Text, VStack, Link } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp, FaGitAlt } from "react-icons/fa";

const Home = () => {
  return (
    <Box w="100%" h="400px">
      <Box>
        <Text size="20px">
          I&apos;m{" "}
          {
            <Text color="gold" display="inline">
              Korede Thompson
            </Text>
          }
          <br />
          fullStack softWare developer
        </Text>
        <Button mt="20">Contact me</Button>
      </Box>
      <VStack position="fixed" right="10" top="200" z-index="1">
        <Box height="100px" width="1px" bg="gold" />
        <Button bg="none" color="grey">
          <Link href="https://x.com/boi_thompson456">
            <FaXTwitter />
          </Link>
        </Button>
        <Button bg="none" color="grey">
          <Link href="https://wa.ma/+2347033300647">
            <FaWhatsapp />
          </Link>
        </Button>

        <Button bg="none" color="grey">
          <Link href="https://github.com/korede456">
            <FaGitAlt />
          </Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
