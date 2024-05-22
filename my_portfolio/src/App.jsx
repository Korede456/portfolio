import Header from "./components/Header/Header";
import { Box } from "@chakra-ui/react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Box>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Footer />
    </Box>
  );
};

export default App;
