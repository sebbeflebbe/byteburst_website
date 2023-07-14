import { Box, Button, ButtonGroup, Menu, MenuButton, MenuList, MenuItem, Image, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from './byteburstlogo.jpg';

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
  return (
    <Box className="App">
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
                variant="ghost"
                color="whiteAlpha.900" // Update colorScheme to "whiteAlpha"
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
                variant="ghost"
                color="whiteAlpha.900" // Update colorScheme to "whiteAlpha"
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
                variant="ghost"
                color="whiteAlpha.900" // Update colorScheme to "whiteAlpha"
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
                variant="ghost"
                color="whiteAlpha.900" // Update colorScheme to "whiteAlpha"
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
          <Box className="green-board-text">
            Fueling tech excellence, one code at a time
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
