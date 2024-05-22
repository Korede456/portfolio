import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp, FaGitAlt } from "react-icons/fa";

const Home = () => {
  return (
    <Box w="100%" h="400px">
      <Box>
        <Text>
          I&apos;m {<Text color="gold" display="inline">Korede Thompson</Text>} fullStack softWare
          developer
        </Text>
        <Button>Contact me</Button>
      </Box>
      <VStack position="fixed" right="10"top="200" z-index="1">
        <Box height="100px" width="1px" bg="gray.200"  />
        <Button>
          <FaXTwitter />
        </Button>
        <Button>
          <FaWhatsapp />
        </Button>
        <Button>
          <FaGitAlt />
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
