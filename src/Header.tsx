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
import { AiFillHome, AiOutlineMenu, AiFillMail } from "react-icons/ai";
import { BsFillCameraVideoFill, BsPersonFill } from "react-icons/bs";
import Branding from "../public/branding.jpg";
import { Link } from "react-router-dom";

export const UpperSection = () => {
  const bg = useColorModeValue("black", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <>
      {/*mobile nav menu*/}
      <Box shadow="md">
        <chakra.header
          style={{ backgroundImage: "url(/headerFooter.png)" }}
          borderColor="gray.600"
          borderBottomWidth={1}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          position="fixed"
          top={0}
          width="100%"
          zIndex={999}
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
                  backgroundColor="gray.800"
                  color="gray.400"
                  _dark={{
                    color: "inherit",
                  }}
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
                <VStack
                  style={{ backgroundImage: "url(/headerFooter.png)" }}
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
                    color="gray.400"
                  />
                  <Link to={`/`} className="w-full">
                    <Button
                      backgroundColor="gray.800"
                      color="gray.400"
                      w="full"
                      leftIcon={<AiFillHome />}
                      onClick={() => {
                        mobileNav.onClose();
                        window.scrollTo(0, 0);
                      }}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link to={`/about`} className="w-full">
                    <Button
                      w="full"
                      backgroundColor="gray.800"
                      color="gray.400"
                      leftIcon={<BsPersonFill />}
                      onClick={() => {
                        mobileNav.onClose();
                        window.scrollTo(0, 0);
                      }}
                    >
                      About
                    </Button>
                  </Link>

                  <Link to={`/videos`} className="w-full">
                    <Button
                      w="full"
                      backgroundColor="gray.800"
                      color="gray.400"
                      leftIcon={<BsFillCameraVideoFill />}
                      onClick={() => {
                        mobileNav.onClose();
                        window.scrollTo(0, 0);
                      }}
                    >
                      Videos
                    </Button>
                  </Link>

                  <Link to={`/message`} className="w-full">
                    <Button
                      w="full"
                      backgroundColor="gray.800"
                      color="gray.400"
                      leftIcon={<AiFillMail />}
                      onClick={() => {
                        mobileNav.onClose();
                        window.scrollTo(0, 0);
                      }}
                    >
                      Send me a Message
                    </Button>
                  </Link>
                </VStack>
              </Box>

              {/*desktop menu*/}

              <chakra.h1 className="text-white" fontSize="xl">
                CurtisMadeIt
              </chakra.h1>
            </HStack>
            <HStack spacing={3} display="flex" alignItems="center">
              <Avatar
                size="sm"
                name="c-love"
                className="sm: hidden"
                src={Branding}
              />
            </HStack>
          </Flex>
        </chakra.header>

        <Hide below="md">
          <Flex
            style={{ backgroundImage: "url(/headerFooter.png)" }}
            ml={0}
            borderWidth={0}
            overflowX="auto"
            className="bg-gray-800"
            position="fixed" // Set the position to fixed
            top={0} // Position at the top of the viewport
            width="100%" // Take up the full width of the viewport
            zIndex={999} // Set a high z-index to ensure it stays on top of other content
          >
            <Tabs defaultIndex={0} borderBottomColor="#00ff00">
              <TabList className="text-gray-200">
                <div className="flex">
                  <Link
                    to={`/`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Tab
                      py={4}
                      m={0}
                      _focus={{
                        boxShadow: "none",
                      }}
                    >
                      Home
                    </Tab>
                  </Link>
                  <Link
                    to={`/about`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Tab
                      py={4}
                      m={0}
                      _focus={{
                        boxShadow: "none",
                      }}
                    >
                      About
                    </Tab>
                  </Link>
                  <Link
                    to={`/videos`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Tab
                      py={4}
                      m={0}
                      _focus={{
                        boxShadow: "none",
                      }}
                    >
                      Videos
                    </Tab>
                  </Link>
                  <Link
                    to={`/message`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Tab
                      py={4}
                      m={0}
                      _focus={{
                        boxShadow: "none",
                      }}
                    >
                      Send me a Message
                    </Tab>
                  </Link>
                </div>
              </TabList>
            </Tabs>
          </Flex>
        </Hide>
      </Box>
    </>
  );
};
