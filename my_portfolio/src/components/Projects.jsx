import { useState } from "react";
import {
  Box,
  Card,
  Flex,
  Heading,
  Img,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import trivia from "../assets/images/intel-trivia.png";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const projects = [
  {
    name: "Ai Chatbot Api",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVXKBYiWUWtclNlbLvzq-B_AkxjYfAbDtZt4IlGNZkw&s",
    description:
      "A simple ai chat bot api powered by gemini. The api was written with Node.js",
  },
  {
    name: "Blog Application",
    img: "https://blog.hubspot.com/hubfs/Google%20Drive%20Integration/Untitled%20document-May-18-2023-01-36-13-2396-PM.png",
    description:
      "A blog application made with Django and React.js. will be released soon",
  },
  {
    name: "Intel Trivia Game",
    img: trivia,
    description:
      "A simple trivia game with 5 categories and 20 questions to be answered per category",
  },
];

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
    onOpen();
  };
  return (
    <Box id="projects" my="50px" w="100%">
      <Heading w="100%" align="center" mb="5">
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
          <Box
            key={index}
            w={{ base: "100%", md: "30%" }}
            h={{ base: "200", md: "200", lg: "300" }}
          >
            <Card
              position="relative"
              rounded="0"
              w={{ base: "100%", md: "30%" }}
              h={{ base: "200", md: "200", lg: "300" }}
              onClick={() => handleProjectClick(index)}
            >
              <MotionBox
                w="100%"
                h="100%"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <Img src={item.img} alt={item.name} h="100%" w="100%" />
                <Heading
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="grey"
                  align="center"
                >
                  {item.name}
                </Heading>
              </MotionBox>
            </Card>
            <Modal
              isOpen={isOpen && selectedProject === index}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{item.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>{item.description}</Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
