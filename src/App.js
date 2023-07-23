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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import logo from './byteburstlogo.remade.png';
import openscanImage from './OpenScanNew.jpg';
import consultantProfile from './Consultant_profile.pdf';
import thesis from './Examensarbete_slutversion.pdf';

function ThesisPDF() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <object data={thesis} type="application/pdf" width="200%" height="700px">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href={thesis}>Download PDF</a>.</p>
      </object>
    </Box>
  );
}


function MyPDF() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <object data={consultantProfile} type="application/pdf" width="200%" height="700px">
            <p>This browser does not support PDFs. Please download the PDF to view it: <a href={consultantProfile}>Download PDF</a>.</p>
        </object>
    </Box>
);
}
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

// Custom Drawer component
function MenuDrawer({ isOpen, onClose }) {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false}>
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
  // Regular expression to match sentence ends (. ! ?) followed by a space or the end of the text
  const regex = /(\.|\!|\?)(\s|$)/g;
  let match;
  let lastMatchIndex = -1;

  // Find the last sentence end before the index
  while ((match = regex.exec(text)) !== null) {
    if (match.index > index) {
      break;
    }
    lastMatchIndex = match.index;
  }

  // Return the nearest sentence end before the index
  return lastMatchIndex >= 0 ? lastMatchIndex + match[1].length : index;
}

// Custom AnimatedText component
function AnimatedText({ text, animation }) {
  return (
    <Box
      className={`animate__animated ${animation}`} // Apply the animation class to the element
    >
      {text}
    </Box>
  );
}

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0); // Add tabValue state

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue); // Add handleTabChange function
  };

  // The complete text to be split into two columns
  const completeText = `
    Founded in 2023 by Sebastian Andersson, a junior developer with a passion for technology, ByteBurst is a software development company committed to delivering excellent results for clients. We are a young team that embraces challenges, seeks growth opportunities, and prioritizes customer satisfaction.
    Our mission is to provide flexible and cost-effective software solutions tailored to meet individual needs. We value continuous learning, take on diverse projects, and offer innovative solutions to clients.
    Whether you're a startup or an established enterprise, our developers are ready to assist you with technical questions and transparent communication.
    We believe in the joy of the development journey, holding steadfast to our core values of learning and patience. Our team stays up-to-date with industry trends to deliver contemporary solutions.
    At ByteBurst, we cherish patience, attention to detail, and enthusiasm in every project we undertake.
    Let us accompany you on your journey to success. Explore our services, meet our consultants, and experience the ByteBurst difference. Contact us today and embark on this exciting adventure!
  `;

  // Split the complete text into two parts
  const halfway = Math.floor(completeText.length / 2);
  const leftColumnText = completeText.slice(0, findNearestSentenceEnd(completeText, halfway)).trim();
  const rightColumnText = completeText.slice(findNearestSentenceEnd(completeText, halfway)).trim();

  return (
    <Box className="App" bg="#Ffbf1dd">
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
            {/* Replace the previous menu buttons with the Chakra Drawer button */}
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
        bg="#0c3e3e"
        color="#fbf1dd"
      >
        <FooterContent />
      </Box>
      <Box bg="#Fbf1dd" pt={100} pb={60}>
        {/* Vision Section */}
        <Box
          className="content-container"
          p={1}
          mx={0} /* Set horizontal margin to 0 */
          mb={60}
          display="flex"
          flexDirection="column"
          alignItems="center"
          id="vision-section" // Add an id to the Vision Section
        >
          <Heading as="h2" size="2xl" mb={8} color="#E9841D"> {/* Set color to #E9841D */}
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
                  <Flex flexDirection="row" justifyContent="center">
                    <Box mr={4}>
                      <iframe src="https://giphy.com/embed/tPjlmJzj9Z99vwF5dV" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </Box>
                    <Box fontSize="18px" textAlign="justify" className="animate__animated animate__bounceInUp" ml={4}>
                      <Box mb={4}>
                        {leftColumnText}
                      </Box>
                    </Box>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex flexDirection="row" justify="space-between">
                    <Box fontSize="18px" textAlign="justify" className="animate__animated animate__bounceInUp" mr={4}>
                      <Box mb={4} mr={78}>
                        {rightColumnText}
                      </Box>
                    </Box>
                    <iframe src="https://giphy.com/embed/3ov9jQiFcWPPxICjFm" width="250" height="250" frameBorder="0" allowFullScreen></iframe>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>

        {/* Projects Section */}
        <Box
          className="content-container"
          p={10}
          mx={0}
          mb={60}
          display="flex"
          flexDirection="column"
          alignItems="center"
          id="projects-section" // Add an id to the Projects Section
        >
          <Heading as="h2" size="2xl" mb={8} color="#E9841D"> {/* Set color to #E9841D */}
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
                  <Flex flexDirection="row" justify="flex-start">
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
                    <Image src={openscanImage} alt="OpenScan Image" width="20%" height="20%" mr={20} />
                  </Flex>
                </TabPanel>
                <TabPanel>
  <Flex flexDirection="row" justify="flex-start">
    <Box mr={4}>
      <iframe src="https://giphy.com/embed/POnSvcVCocE5E30x3y" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
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
  </Flex>
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

        {/* Consultants Section */}
        <Box
          className="content-container"
          p={10}
          mx={0}
          mb={60}
          display="flex"
          flexDirection="column"
          alignItems="center"
          id="consultants-section" // Add an id to the Consultants Section
        >
          <Heading as="h2" size="2xl" mb={8} color="#E9841D"> {/* Set color to #E9841D */}
            Consultants
          </Heading>
          <Box className="column-content">
            <Tabs value={tabValue} onChange={handleTabChange} colorScheme="teal">
              <TabList>
                <Tab>Sebastian</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box fontSize="25px" fontWeight="bold" textAlign="center" mb={4}>
                    <AnimatedText
                      text="Sebastian Andersson: Junior Developer"
                      animation="animate__lightSpeedInRight"
                    />
                  </Box>
                  <Box fontSize="18px" textAlign="justify" className="animate__animated animate__bounceInUp">
                    <Box mb={4}>
                      <MyPDF/> {/* Add this line */}
                    </Box>
                  </Box>
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
    <Box display="flex" alignItems="center" justifyContent="center">
      <a href="https://www.linkedin.com/in/sebastianmikaelandersson/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ marginRight: '15px', fontSize: "150%" }} />
      </a>
      <Tooltip label="0700393805" fontSize="md">
        <span> {/* Wrap the icon with a span to provide a DOM element for the tooltip to attach to */}
          <FaPhone style={{ marginRight: '15px', fontSize: "150%" }} />
        </span>
      </Tooltip>
      <Tooltip label="sebastian@byteburst.dev" fontSize="md">
        <span> {/* Wrap the icon with a span to provide a DOM element for the tooltip to attach to */}
          <FaEnvelope style={{ marginRight: '15px', fontSize: "150%" }} />
        </span>
      </Tooltip>
      <a href="https://github.com/sebbeflebbe" target="_blank" rel="noopener noreferrer">
        <FiGithub style={{ marginRight: '15px', fontSize: "150%" }} />
      </a>
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
