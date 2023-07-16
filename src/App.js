import { useState } from 'react';
import React from 'react';
import 'animate.css';
import {
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  extendTheme,
  ChakraProvider,
  Card,
  CardHeader,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import logo from './byteburstlogo.jpg';
import scribbleAnimation from "./scribble-animation.json";

// Customizing the default theme
const theme = extendTheme({
  components: {
    Button: {
      variants: {
        outline: {
          border: "2px dashed",
          borderRadius: 0,
          fontWeight: "semibold",
        },
      },
    },
  },
});


function App() {
  const [showCard, setShowCard] = useState(false);

  const handlePhoneIconClick = () => {
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  // The complete text to be split into two columns
  const completeText = `Founded in the summer of 2023 by Sebastian Andersson, a recently graduated junior developer with a passion for technology and problem-solving, ByteBurst is a forward-thinking software development company committed to delivering exceptional results for our clients. We pride ourselves on being a young and vibrant team that embraces challenges, constantly seeks growth opportunities, and values customer satisfaction above all else.

  Our Mission: Flexibility, Cost Effectiveness, and Knowledge Expansion

  At ByteBurst, our mission is simple yet powerful - to provide our customers with unparalleled flexibility and cost-effectiveness in their software development projects. We understand that every business is unique and has its own specific requirements. That's why we tailor our solutions to meet your individual needs, ensuring that you receive the best value for your investment.

  As a company founded by a junior developer, we know the importance of continuous learning and growth. We are eager to take on a wide range of projects across various industries, as each new challenge presents an opportunity for us to gather knowledge and expand our expertise. By embracing diverse projects, we strengthen our problem-solving skills and gain valuable insights that enable us to offer innovative solutions to our clients.

  Our Services: Expertise and Support at Your Fingertips

  Whether you are a startup with limited technical resources or an established enterprise seeking to enhance your software capabilities, we are here to help. At ByteBurst, we are well-equipped to handle a myriad of development-related questions, and our team of highly skilled developers is always ready to assist you. You can easily reach out to us, and we encourage you to explore our consultant profiles to find the perfect fit for your project.

  We understand that software development can be a daunting process, especially for those unfamiliar with the technical jargon. Rest assured, with ByteBurst, you won't need to worry about the complexities of the development journey. We believe in clear and transparent communication, ensuring that you stay informed every step of the way.

  Our Core Values: Willingness to Learn, Patience, and Joy

  For us, software development is not merely a profession; it is a journey of growth and discovery. We hold steadfast to our core values of willingness to learn, patience, and finding joy in what we do. It is this passion that drives us to deliver exceptional results and create valuable experiences for our clients.

  Our team is continuously honing their skills and staying up-to-date with the latest industry trends and technological advancements. We believe that by constantly learning, we can stay at the forefront of innovation and deliver cutting-edge solutions.

  We also understand that great things take time and effort. Patience is a virtue we cherish, as it allows us to approach each project with meticulous attention to detail and deliver polished, high-quality outcomes.

  Finally, joy is at the heart of everything we do. We believe that enjoying the journey is just as important as reaching the destination. Our enthusiasm and positive approach bring an element of excitement to every project we undertake.

  Join Us on Your Journey to Success

  Whether you are an aspiring startup or an established enterprise seeking to revamp your software solutions, ByteBurst is here to accompany you on your journey to success. Our dedication to flexibility, cost-effectiveness, knowledge expansion, and our core values ensure that you receive nothing short of excellence.

  We welcome you to explore our services, meet our consultants, and experience the ByteBurst difference. Let's innovate together and turn your ideas into reality. Get in touch with us today, and let's embark on this exciting adventure together!`;

  // Split the complete text into two parts
  const halfway = Math.floor(completeText.length / 2);
  const leftColumnText = completeText.slice(0, halfway).trim();
  const rightColumnText = completeText.slice(halfway).trim();

  return (
    <Box className="App">
      <Box className="header">
        <Box className="logo-container">
          <Image src={logo} alt="Logo" className="logo-image" />
        </Box>
        <Box className="byteburst-container">
          <p className="byteburst-text animate__animated animate__backInRight">
            <strong>ByteBurst</strong>
          </p>
        </Box>
      </Box>
      <Box className="board-container">
        <Box className="board blue-board">
          <Box className="menu-container">
            {/* Our Projects Menu */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                color="#7a060b"
                _hover={{ bgColor: "red.100" }}
                _expanded={{ bgColor: "blue.200" }}
                _focus={{ boxShadow: "outline" }}
                mr={6}
              >
                Our Projects
              </MenuButton>
              <MenuList
                bg="white"
                color="blue.500"
                minWidth="150px"
                boxShadow="md"
                borderRadius="md"
              >
                <MenuItem _hover={{ bg: "blue.50" }}>OpenScan</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Halloween game</MenuItem>
              </MenuList>
            </Menu>
            {/* Our Consultants Menu */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                color="#7a060b"
                _hover={{ bgColor: "red.100" }}
                _expanded={{ bgColor: "blue.200" }}
                _focus={{ boxShadow: "outline" }}
                mr={6}
              >
                Sebastian
              </MenuButton>
            </Menu>
          </Box>
        </Box>
        <Box className="board dark-green-board">
          <Box className="green-board-text">
            Fueling tech excellence, one code at a time
          </Box>
        </Box>
      </Box>
      <Box
        className="footer"
        pos="fixed"
        bottom="0"
        left="0"
        right="0"
        p="4"
        bg="#7a0606"
        color="white"
      >
        <ButtonGroup>
          <Button
            as="a"
            href="https://www.linkedin.com/company/byteburst/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaLinkedin />}
            variant="ghost"
            color="#d39b22"
          />
          {/* Phone Icon - Card */}
          <Button
            leftIcon={<FaPhone />}
            variant="ghost"
            color="#d39b22"
            onClick={handlePhoneIconClick}
          />
          <Button
            leftIcon={<FaEnvelope />}
            variant="ghost"
            color="#d39b22"
          />
          <Button
            as="a"
            href="https://github.com/sebbeflebbe"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FiGithub />}
            variant="ghost"
            color="#d39b22"
          />
        </ButtonGroup>
      </Box>
      {/* Card */}
      {showCard && (
        <Card maxW="md" mx="auto" mt={2} p={2}>
          <CardHeader>Sebastian Andersson</CardHeader>
          <CardBody>
            <Image src="./self-portrait.jpg" />
            070-0393 805
          </CardBody>
          <Button onClick={handleCloseCard}>Close</Button>
        </Card>
      )}
      {/* Title and Text Columns */}
      <Box
        bg="white"
        p={2}
        mt={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={32}
      >
        <Heading as="h2" size="2xl" mb={8}>
          Our Vision
        </Heading>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-start"
          columnGap={20}
          mx={20}
        >
          <Box flex="1">
            <Box fontSize="16px" textAlign="justify" className="animate__animated animate__bounceInUp">
              {leftColumnText}
            </Box>
          </Box>
          <Box flex="1">
            <Box fontSize="16px" textAlign="justify" className="animate__animated animate__bounceInUp">
              {rightColumnText}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function ThemedApp() {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
}
