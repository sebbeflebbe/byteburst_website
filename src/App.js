import { useState } from 'react';
import React from 'react';
import 'animate.css';
import {
  Box,
  Button,
  Image,
  extendTheme,
  ChakraProvider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
  VStack,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Flex,
  Tooltip,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import logo from './byteburstlogo.remade.png';
import openscanImage from './OpenScanNew.jpg';
import consultantProfile from './Consultant_profile.pdf';
import thesis from './Examensarbete_slutversion.pdf';

// Run this function when the document is loaded
document.addEventListener('DOMContentLoaded', setVhProperty);

// Run this function when the window is resized
window.addEventListener('resize', setVhProperty);

function setVhProperty() {
  // Get the height of the window's inner viewport, then divide by 100 to get the value of 1vh
  let vh = window.innerHeight * 0.01;

  // Set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function ThesisPDF() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <object data={thesis} type="application/pdf" width="120%" height="400px">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href={thesis}>Download PDF</a>.</p>
      </object>
    </Box>
  );
}

function MyPDF() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <object data={consultantProfile} type="application/pdf" width="120%" height="400px">
            <p>This browser does not support PDFs. Please download the PDF to view it: <a href={consultantProfile}>Download PDF</a>.</p>
        </object>
    </Box>
);
}

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

function MenuDrawer({ isOpen, onClose }) {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Drawer isOpen={isOpen} placement={["bottom", "left"]} onClose={onClose} returnFocusOnClose={false}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4}>
            <Button
              colorScheme="teal"
              variant="ghost"
              onClick={() => scrollToSection("vision-section")}
            >
              Vision
            </Button>
            <Button
              colorScheme="teal"
              variant="ghost"
              onClick={() => scrollToSection("projects-section")}
            >
              Projects
            </Button>
            <Button
              colorScheme="teal"
              variant="ghost"
              onClick={() => scrollToSection("consultants-section")}
            >
              Consultants
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

function findNearestSentenceEnd(text, index) {
  const regex = /(\.|\?)(\s|$)/g;
  let match;
  let lastMatchIndex = -1;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > index) {
      break;
    }
    lastMatchIndex = match.index;
  }

  return lastMatchIndex >= 0 ? lastMatchIndex + match[1].length : index;
}

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const completeText = `
    Founded in 2023 by Sebastian Andersson, a junior developer with a passion for technology, ByteBurst is a software development company committed to delivering excellent results for clients. We are a young team that embraces challenges, seeks growth opportunities, and prioritizes customer satisfaction.
    Our mission is to provide flexible and cost-effective software solutions tailored to meet individual needs. We value continuous learning, take on diverse projects, and offer innovative solutions to clients.
    Whether you're a startup or an established enterprise, our developers are ready to assist you with technical questions and transparent communication.
    We believe in the joy of the development journey, holding steadfast to our core values of learning and patience. Our team stays up-to-date with industry trends to deliver contemporary solutions.
    At ByteBurst, we cherish patience, attention to detail, and enthusiasm in every project we undertake.
    Let us accompany you on your journey to success. Explore our services, meet our consultants, and experience the ByteBurst difference. Contact us today and embark on this exciting adventure!
  `;

  const halfway = Math.floor(completeText.length / 2);
  const leftColumnText = completeText.slice(0, findNearestSentenceEnd(completeText, halfway)).trim();
  const rightColumnText = completeText.slice(findNearestSentenceEnd(completeText, halfway)).trim();

  // Use Chakra UI's useBreakpointValue hook to adjust font sizes based on the current breakpoint
  const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  return (
    <Box className="App" bg="#Ffbf1dd">
      <Box className="header">
        <Box className="logo-container" w={["50%", "30%", "20%", "10%"]}>
          <Image src={logo} alt="Logo" className="logo-image" />
        </Box>
        <Box className="byteburst-container">
          <p className="byteburst-text animate__animated animate__backInRight">
            <strong>ByteBurst</strong>
          </p>
        </Box>
      </Box>
      <Box className="board-container" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
        <Box className="board blue-board">
          <Box className="menu-container">
            <Button
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
              color="#fbf1dd"
              _hover={{ bgColor: "#39e4d4" }}
              _expanded={{ bgColor: "#Ffbf1dd" }}
              _focus={{ boxShadow: "outline" }}
              mr={6}
              onClick={handleDrawerOpen}
            >
              Menu
            </Button>
          </Box>
        </Box>
        <Box className="board dark-green-board">
        <Flex className="green-board-text" align="center" justify="center">
          Fueling tech excellence, one byte at a time
        </Flex>
        </Box>
      </Box>
      <Box
        className="footer"
        pos="fixed"
        bottom="0"
        left="0"
        right="0"
        p="4"
        bg="#0c3e3e"
        color="#fbf1dd"
      >
        <FooterContent />
      </Box>
      <Box bg="#Fbf1dd" pt={100} pb={60}>
        <Box
          className="content-container"
          p={[2, 10]}
          mx={0}
          mb={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          id="vision-section"
        >
          <Heading as="h2" size={fontSize} mb={8} color="#E9841D">
            Our Vision
          </Heading>
          <Box className="column-content">
            <Tabs value={tabValue} onChange={handleTabChange} colorScheme="teal">
              <TabList>
                <Tab>Our Mission</Tab>
                <Tab>Our Services</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stack direction={["column", "row"]} justify="center">
                    <Box mr={4}>
                      <iframe title="Unique Title 1" src="https://giphy.com/embed/tPjlmJzj9Z99vwF5dV" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </Box>
                    <Box fontSize="18px" textAlign="justify" className="animate__animated animate__bounceInUp" ml={4}>
                      <Box mb={4}>
                        {leftColumnText}
                      </Box>
                    </Box>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Stack direction={["column", "row"]} justify="space-between">
                    <Box fontSize="18px" textAlign="justify" className="animate__animated animate__bounceInUp" mr={4}>
                      <Box mb={4} mr={78}>
                        {rightColumnText}
                      </Box>
                    </Box>
                    <iframe title="Unique Title 2" src="https://giphy.com/embed/3ov9jQiFcWPPxICjFm" width="250" height="250" frameBorder="0" allowFullScreen></iframe>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>

        <Box
          className="content-container"
          p={[2, 10]}
          mx={0}
          mb={60}
          display="flex"
          flexDirection="column"
          alignItems="center"
          id="projects-section"
        >
          <Heading as="h2" size={fontSize} mb={8} color="#E9841D">
            Projects
          </Heading>
          <Box className="column-content">
            <Tabs value={tabValue} onChange={handleTabChange} colorScheme="teal">
              <TabList>
                <Tab>OpenScan</Tab>
                <Tab>Halloween-game</Tab>
                <Tab>Thesis</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stack direction={["column", "row"]} justify="flex-start">
                    <Box fontSize="18px" textAlign="justify" className="animate__animated animate__bounceInUp" mr={70}>
                      <Box>
                        Introducing OpenScan: Your CLI Sidekick for Easy Vulnerability Scanning!
                        <br></br>
                        Hey developers, meet OpenScan! It's the ultimate CLI solution for swift vulnerability scanning. No fuss, no hassle – just fire up your command line, and OpenScan does the rest!
                        With OpenScan, you'll effortlessly scan your projects for vulnerabilities at lightning speed. We've made it user-friendly for pros and newbies alike. Stay secure without slowing down!
                        OpenScan plays nice with various platforms and languages. It's the perfect balance of effectiveness and ease.
                        Get OpenScan, and let's make vulnerability scanning a breeze. Say goodbye to worries, and scan like a pro! 🚀🔒
                      </Box>
                    </Box>
                    <Image src={openscanImage} alt="OpenScan Image" width={["100%", "20%"]} height={["100%", "20%"]} mr={20} />
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Stack direction={["column", "row"]} justify="flex-start">
                    <Box mr={4}>
                      <iframe title="Unique Title 3" src="https://giphy.com/embed/POnSvcVCocE5E30x3y" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </Box>
                    <Box fontSize="18px" textAlign="justify" className="animate__animated animate__bounceInUp" ml={4}>
                      <Box mb={4}>
                        Get ready for a spooktacular adventure this Halloween, brought to you by ByteBurst! 🎃👻
                        <br></br>
                        Picture this: Geocaching meets Halloween, and it's going down in the breathtaking city of Gothenburg! 🗺️🌆
                        <br></br>
                        We've cooked up a thrilling game that'll have you searching for hidden treasures around famous landmarks. It's like a real-life treasure hunt, but with a spooky twist! 🕵️‍♂️🏰
                        <br></br>
                        Get your crew together and unleash your inner explorer as you decipher clues and unearth hidden caches. Feel the excitement rise as you venture through the city's iconic spots, all while the Halloween spirit weaves its magic around you! 🧭✨
                        <br></br>
                        So, grab your costumes, bring your best puzzle-solving skills, and join us for a hauntingly good time! ByteBurst's Geocaching Halloween-game is waiting for you, and it's bound to be an unforgettable experience. Let's go on this epic quest together! 🎉👻🕵️‍♀️
                      </Box>
                    </Box>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Box fontSize="18px" textAlign="justify" className="animate__animated animate__bounceInUp">
                    <Box mb={4}>
                    <ThesisPDF/>
                    </Box>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>

        <Box
          className="content-container"
          p={[2, 10]}
          mx={0}
          mb={60}
          display="flex"
          flexDirection="column"
          alignItems="center"
          id="consultants-section"
        >
          <Heading as="h2" size={fontSize} mb={8} color="#E9841D">
            Consultants
          </Heading>
          <Box className="column-content">
            <Tabs value={tabValue} onChange={handleTabChange} colorScheme="teal">
              <TabList>
                <Tab>Sebastian Andersson</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stack direction={["column", "row"]} justify="flex-start">
                    <Box fontSize="18px" textAlign="justify" className="animate__animated animate__bounceInUp" mr={70}>
                      <Box>
                        <MyPDF/>
                      </Box>
                    </Box>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
      <MenuDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </Box>
  );
}

function FooterContent() {
  return (
    <Flex direction={["column", "row"]} justify="center" align="center" wrap="wrap">
      <Box m={2}>
        <Tooltip label="Call us" fontSize="md">
          <Button
            leftIcon={<FaPhone />}
            colorScheme="teal"
            variant="ghost"
            onClick={() => window.open("tel:+46700393805")}
          >
            +46 70 039 38 05
          </Button>
        </Tooltip>
      </Box>
      <Box m={2}>
        <Tooltip label="Email us" fontSize="md">
          <Button
            leftIcon={<FaEnvelope />}
            colorScheme="teal"
            variant="ghost"
            onClick={() => window.open("mailto:Sebastian@byteburst.se")}
          >
            sebastian@byteburst.se
          </Button>
        </Tooltip>
      </Box>
      <Box m={2}>
        <Tooltip label="Visit our LinkedIn" fontSize="md">
          <Button
            leftIcon={<FaLinkedin />}
            colorScheme="teal"
            variant="ghost"
            onClick={() => window.open("https://www.linkedin.com/company/byteburst/")}
          >
            LinkedIn
          </Button>
        </Tooltip>
      </Box>
      <Box m={2}>
        <Tooltip label="Visit our GitHub" fontSize="md">
          <Button
            leftIcon={<FiGithub />}
            colorScheme="teal"
            variant="ghost"
            onClick={() => window.open("https://github.com/sebbeflebbe")}
          >
            GitHub
          </Button>
        </Tooltip>
      </Box>
    </Flex>
  );
}


export default function Main() {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
}
