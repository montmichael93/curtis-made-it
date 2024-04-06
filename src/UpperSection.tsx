import {
  Avatar,
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Hide,
  IconButton,
  Tab,
  TabList,
  Tabs,
  VStack,
  chakra,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useBuild } from "./Provider";
import { useState } from "react";
//import { FaYoutube, FaInstagram } from "react-icons/fa";
import { AiFillHome, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { BsFillCameraVideoFill, BsPerson } from "react-icons/bs";
import curtisAvatar from "../public/curtisAvatar.png";

export const UpperSection = () => {
  const { activeComponent, setActiveComponent } = useBuild();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bg = useColorModeValue("black", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <>
      <Box shadow="md">
        <chakra.header
          bg={bg}
          borderColor="gray.600"
          borderBottomWidth={1}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <HStack spacing={4} display="flex" alignItems="center">
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                    color={"white"}
                  />

                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<AiFillHome />}
                    onClick={() => {
                      activeComponent === "Home"
                        ? setActiveComponent(activeComponent)
                        : setActiveComponent("Home");
                      setIsMenuOpen(!isMenuOpen);
                      mobileNav.onClose;
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    w="full"
                    //colorScheme="brand"
                    variant="ghost"
                    leftIcon={<BsPerson />}
                    onClick={() => {
                      activeComponent === "About"
                        ? setActiveComponent(activeComponent)
                        : setActiveComponent("About");
                      setIsMenuOpen(!isMenuOpen);
                      mobileNav.onClose;
                    }}
                  >
                    About
                  </Button>
                  <Button
                    w="full"
                    //variant="ghost"
                    colorScheme="brand"
                    leftIcon={<BsFillCameraVideoFill />}
                    onClick={() => {
                      activeComponent === "Builds"
                        ? setActiveComponent(activeComponent)
                        : setActiveComponent("Builds");
                      setIsMenuOpen(!isMenuOpen);
                      mobileNav.onClose;
                    }}
                  >
                    Videos
                  </Button>
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<AiOutlineMail />}
                    onClick={() => {
                      activeComponent === "Message"
                        ? setActiveComponent(activeComponent)
                        : setActiveComponent("Message");
                      setIsMenuOpen(!isMenuOpen);
                      mobileNav.onClose;
                    }}
                  >
                    Send me a Message
                  </Button>
                </VStack>
              </Box>

              <chakra.h1 className="text-white" fontSize="xl">
                CurtisMadeIt
              </chakra.h1>
            </HStack>
            <HStack spacing={3} display="flex" alignItems="center">
              <Avatar size="sm" name="c-love" src={curtisAvatar} />
            </HStack>
          </Flex>
        </chakra.header>

        <Hide below="md">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            ml={0}
            borderWidth={0}
            overflowX="auto"
          >
            <Tabs defaultIndex={0} borderBottomColor="#00ff00">
              <TabList>
                <Tab
                  py={4}
                  m={0}
                  _focus={{
                    boxShadow: "none",
                  }}
                  onClick={() => {
                    activeComponent === "Home"
                      ? setActiveComponent(activeComponent)
                      : setActiveComponent("Home");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  Home
                </Tab>
                <Tab
                  py={4}
                  m={0}
                  _focus={{
                    boxShadow: "none",
                  }}
                  onClick={() => {
                    activeComponent === "About"
                      ? setActiveComponent(activeComponent)
                      : setActiveComponent("About");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  About
                </Tab>
                <Tab
                  py={4}
                  m={0}
                  _focus={{
                    boxShadow: "none",
                  }}
                  onClick={() => {
                    activeComponent === "Builds"
                      ? setActiveComponent(activeComponent)
                      : setActiveComponent("Builds");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  Videos
                </Tab>
                <Tab
                  py={4}
                  m={0}
                  _focus={{
                    boxShadow: "none",
                  }}
                  onClick={() => {
                    activeComponent === "Message"
                      ? setActiveComponent(activeComponent)
                      : setActiveComponent("Message");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  Send Me A Message
                </Tab>
              </TabList>
            </Tabs>
          </Flex>
        </Hide>
      </Box>
    </>
  );
};
