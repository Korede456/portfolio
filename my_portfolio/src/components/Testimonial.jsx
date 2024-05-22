import Slider from "react-slick";
import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "This is the first testimonial.",
    image: "https://picsum.photos/300",
    name: "John Doe",
    role: "Technical manager @ INTELBOX SOLUTIONS"
  },
  {
    text: "This is the second testimonial.",
    image: "https://picsum.photos/150",
    name: "Jane Smith",
    role: "Technical manager @ INTELBOX SOLUTIONS"
  },
  {
    text: "This is the third testimonial.",
    image: "https://picsum.photos/200",
    name: "Michael Johnson",
    role: "Technical manager @ INTELBOX SOLUTIONS"
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box w="100%" mx="auto" p={4}>
      <Heading>Testimonial</Heading>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Flex key={index} alignItems="center" p={4} direction="row">
            <Box>
              <Text fontSize="lg" mb={2}>
                {testimonial.text}
              </Text>
              <Text fontWeight="bold">{testimonial.name}</Text>
              <Text>{testimonial.role}</Text>
            </Box>
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              borderRadius="full"
              boxSize="150px"
              ml={4}
            />
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonial;
