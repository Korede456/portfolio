import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const About = () => {
  return (
    <Box>
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Box w="100%" align="left" id="about">
          <Heading my="10">About Me</Heading>
          <Text w={{ base: "100%", md: "50%" }}>
            Hello there! 👋 I&apos;m a passionate software engineer with a love
            for programming and a relentless drive to continuously improve my
            skills.
          </Text>
        </Box>

        <Box w="100%" align="right">
          <Heading align="left" my="10">
            Who Am I?
          </Heading>
          <Text w={{ base: "100%", md: "50%" }} align="left">
            I thrive in the dynamic world of web development, where every line
            of code is an opportunity to craft elegant solutions and bring ideas
            to life. With a solid foundation in software engineering principles,
            I navigate through complex challenges with curiosity and
            determination.
          </Text>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default About;
