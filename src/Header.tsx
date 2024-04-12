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
import { AiFillHome, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { BsFillCameraVideoFill, BsPerson } from "react-icons/bs";
import curtisAvatar from "../public/curtisAvatar.png";
import { Link } from "react-router-dom";

export const UpperSection = () => {
  const bg = useColorModeValue("black", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <>
      {/*mobile nav menu*/}
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
                  <Link to={`/`} className="w-full">
                    <Button
                      w="full"
                      leftIcon={<AiFillHome />}
                      onClick={() => {
                        mobileNav.onClose();
                      }}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link to={`/about`} className="w-full">
                    <Button
                      w="full"
                      leftIcon={<BsPerson />}
                      onClick={() => {
                        mobileNav.onClose();
                      }}
                    >
                      About
                    </Button>
                  </Link>

                  <Link to={`/videos`} className="w-full">
                    <Button
                      w="full"
                      leftIcon={<BsFillCameraVideoFill />}
                      onClick={() => {
                        mobileNav.onClose();
                      }}
                    >
                      Videos
                    </Button>
                  </Link>

                  <Link to={`/message`} className="w-full">
                    <Button
                      w="full"
                      leftIcon={<AiOutlineMail />}
                      onClick={() => {
                        mobileNav.onClose();
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
                src={curtisAvatar}
              />
            </HStack>
          </Flex>
        </chakra.header>

        <Hide below="md">
          <Flex
            //alignItems="center"
            //justifyContent="space-between"
            ml={0}
            borderWidth={0}
            overflowX="auto"
          >
            <Tabs defaultIndex={0} borderBottomColor="#00ff00">
              <TabList>
                <Link to={`/`}>
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
                <Link to={`/about`}>
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
                <Link to={`/videos`}>
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
                <Link to={`/message`}>
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
              </TabList>
            </Tabs>
          </Flex>
        </Hide>
      </Box>
    </>
  );
};
