import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Box w="100%" align="left">
        <Heading>About Me</Heading>
        <Text w={{ base: "100%", md: "50%" }}>
          Hello there! 👋 I&apos;m a passionate software engineer with a love
          for programming and a relentless drive to continuously improve my
          skills.
        </Text>
      </Box>

      <Box w="100%" align="right">
        <Heading>Who Am I?</Heading>
        <Text w={{ base: "100%", md: "50%" }}>
          I thrive in the dynamic world of web development, where every line of
          code is an opportunity to craft elegant solutions and bring ideas to
          life. With a solid foundation in software engineering principles, I
          navigate through complex challenges with curiosity and determination.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
