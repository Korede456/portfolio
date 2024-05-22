import { Box, Card, Flex, Heading, Img } from "@chakra-ui/react";
import trivia from "../assets/images/intel-trivia.png";

const Projects = () => {
  const projects = [
    {
      name: "Ai Chatbot Api",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVXKBYiWUWtclNlbLvzq-B_AkxjYfAbDtZt4IlGNZkw&s",
    },
    {
      name: "Blog Application",
      img: "https://blog.hubspot.com/hubfs/Google%20Drive%20Integration/Untitled%20document-May-18-2023-01-36-13-2396-PM.png",
    },
    {
      name: "Intel Trivia Game",
      img: trivia,
    },
  ];
  return (
    <Box my="50px" w="100%">
      <Heading w="100%" align="center"mb="5">
        My Projects
      </Heading>
      <Flex
        direction="row"
        align="center"
        wrap="wrap"
        overflow="hidden"
        gap="20px"
        justify="center"
        w="100%"
      >
        {projects.map((item, index) => (
          <Card key={index} rounded="0" w="30%" h="200">
            <Img src={item.img} alt={item.name} h="100%" w="100%" />
            <Heading position="absolute" top="40%" left="5" color="#fff">
              {item.name}
            </Heading>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
