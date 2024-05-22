import {
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

// Import images directly
import bashShell from "../assets/images/bash&shell.png";
import cImage from "../assets/images/c.png";
import django from "../assets/images/django.png";
import git from "../assets/images/git.png";
import htmlCss from "../assets/images/html&css.png";
import js from "../assets/images/js.png";
import python from "../assets/images/python.png";
import react from "../assets/images/react.png";
import sql from "../assets/images/sql.png";
import ubuntu from "../assets/images/ubuntu-logo.png";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "Bash & Shell Scripting",
      path: bashShell,
    },
    {
      name: "C",
      path: cImage,
    },
    {
      name: "Django",
      path: django,
    },
    {
      name: "Git version control",
      path: git,
    },
    {
      name: "HTML & CSS",
      path: htmlCss,
    },
    {
      name: "JavaScript",
      path: js,
    },
    {
      name: "Python",
      path: python,
    },
    {
      name: "React.js",
      path: react,
    },
    {
      name: "MySQL",
      path: sql,
    },
    {
      name: "Ubuntu",
      path: ubuntu,
    },
  ];

  const MotionBox = motion(Box);

  return (
    <Box id="skills" my="50px">
      <Heading w="100%" align="center" mb="5">
        My Skills
      </Heading>
      <Flex
        direction="row"
        align="center"
        wrap="wrap"
        overflow="hidden"
        gap="20px"
        justify="center"
      >
        {skills.map((item, index) => (
          <Card
            key={index}
            w="200px"
            h="200px"
            p="5"
            overflow="hidden"
            rounded="20"
            bg="rgba(0 ,0, 0, 0.3)"
          >
            {" "}
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <VStack>
                <Box w="100%" h="150px">
                  <Image src={item.path} alt={item.name} w="100%" h="100%" />
                </Box>
                <Text position="absolute" color="#fff" bottom="2" weight="bold">
                  {item.name}
                </Text>
              </VStack>
            </MotionBox>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
