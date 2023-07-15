import { useState } from 'react';
import React from 'react';
import Lottie from 'react-lottie';
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
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                color="#7a060b"
                _hover={{ bgColor: "blue.100" }}
                _expanded={{ bgColor: "blue.200" }}
                _focus={{ boxShadow: "outline" }}
                mr={6}
              >
                Vision
              </MenuButton>
              <MenuList
                bg="white"
                color="blue.500"
                minWidth="150px"
                boxShadow="md"
                borderRadius="md"
              >
                <MenuItem _hover={{ bg: "blue.50" }}>Option 1</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 2</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 3</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 4</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                color="#7a060b"
                _hover={{ bgColor: "blue.100" }}
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
                <MenuItem _hover={{ bg: "blue.50" }}>Option 1</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 2</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 3</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 4</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                color="#7a060b"
                _hover={{ bgColor: "blue.100" }}
                _expanded={{ bgColor: "blue.200" }}
                _focus={{ boxShadow: "outline" }}
                mr={6}
              >
                Our Consultants
              </MenuButton>
              <MenuList
                bg="white"
                color="blue.500"
                minWidth="150px"
                boxShadow="md"
                borderRadius="md"
              >
                <MenuItem _hover={{ bg: "blue.50" }}>Option 1</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 2</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 3</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 4</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                color="#7a060b"
                _hover={{ bgColor: "blue.100" }}
                _expanded={{ bgColor: "blue.200" }}
                _focus={{ boxShadow: "outline" }}
                mr={6}
              >
                Contact
              </MenuButton>
              <MenuList
                bg="white"
                color="blue.500"
                minWidth="150px"
                boxShadow="md"
                borderRadius="md"
              >
                <MenuItem _hover={{ bg: "blue.50" }}>Option 1</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 2</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 3</MenuItem>
                <MenuItem _hover={{ bg: "blue.50" }}>Option 4</MenuItem>
              </MenuList>
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
            <Image src="./self-portrait.jpg"/>
            070-0393 805
          </CardBody>
          <Button onClick={handleCloseCard}>Close</Button>
        </Card>
      )}
      {/* Lottie Animation */}
      <div className="animation-container" style={{ position: 'fixed', top: '10px', right: '-180px' }}>
  <Lottie
    options={{
      animationData: scribbleAnimation,
      loop: true,
      autoplay: true,
    }}
    width={600}
    height={130}
  />
</div>
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
