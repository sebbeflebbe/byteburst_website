import { Box, Button, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from './byteburstlogo.jpg';

function App() {
  return (
    <Box className="App">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
      </head>
      <Box className="header">
        <Box className="logo-container">
          <Image src={logo} alt="Logo" className="logo-image" />
        </Box>
        <Box className="byteburst-container">
          <p className="byteburst-text">
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
                variant="outline"
                colorScheme="blue"
                _hover={{ bgColor: "blue.100" }}
                _expanded={{ bgColor: "blue.200" }}
                _focus={{ boxShadow: "outline" }}
                mr={6} // Increase the spacing to 6
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
                variant="outline"
                colorScheme="blue"
                _hover={{ bgColor: "blue.100" }}
                _expanded={{ bgColor: "blue.200" }}
                _focus={{ boxShadow: "outline" }}
                mr={6} // Increase the spacing to 6
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
                variant="outline"
                colorScheme="blue"
                _hover={{ bgColor: "blue.100" }}
                _expanded={{ bgColor: "blue.200" }}
                _focus={{ boxShadow: "outline" }}
                mr={6} // Increase the spacing to 6
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
                variant="outline"
                colorScheme="blue"
                _hover={{ bgColor: "blue.100" }}
                _expanded={{ bgColor: "blue.200" }}
                _focus={{ boxShadow: "outline" }}
                mr={6} // Increase the spacing to 6
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
          <p className="green-board-text">
            Fueling tech excellence, one code at a time
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
