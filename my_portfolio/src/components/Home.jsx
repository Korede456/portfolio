import { Box, Button, Text, VStack, Link } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp, FaGitAlt } from "react-icons/fa";

const Home = () => {
  return (
    <Box id="home" w="100%" h={{ sm: "auto", md: "400px" }} mt="20">
      <Box>
        <Text fontSize={{ base: "1.5rem", md: "3rem" }}>
          I&apos;m{" "}
          {
            <Text color="gold" display="inline">
              Korede Thompson
            </Text>
          }
          <br />a fullStack softWare engineer
        </Text>
        <Button mt="20">
          <Link href="#contact">Contact me</Link>
        </Button>
      </Box>
      <VStack
        position="fixed"
        right={{ base: "2px", md: "10" }}
        top="200"
        z-index="1"
      >
        <Box height="100px" width="1px" bg="gold" />
        <Button bg="none" color="grey">
          <Link href="https://x.com/boi_thompson456" isExternal>
            <FaXTwitter />
          </Link>
        </Button>
        <Button bg="none" color="grey">
          <Link href="https://wa.ma/+2347033300647" isExternal>
            <FaWhatsapp />
          </Link>
        </Button>

        <Button bg="none" color="grey">
          <Link href="https://github.com/korede456" isExternal>
            <FaGitAlt />
          </Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
