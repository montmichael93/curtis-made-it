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
  useDisclosure,
} from "@chakra-ui/react";
import {
  AiFillHome,
  AiOutlineMenu,
  AiFillMail,
  AiOutlineLink,
} from "react-icons/ai";
import { BsFillCameraVideoFill, BsPersonFill } from "react-icons/bs";
import Branding from "../public/branding.jpg";
import { Link, useLocation, useParams } from "react-router-dom";

export const UpperSection = () => {
  const mobileNav = useDisclosure();
  const location = useLocation();
  const path = location.pathname;
  const { videoId } = useParams();

  const pageTab = () => {
    if (path === "/") {
      return 0;
    } else if (path === "/about") {
      return 1;
    } else if (path === "/videos" || videoId) {
      return 2;
    } else if (path === "/affiliates") {
      return 3;
    } else if (path === "/message") {
      return 4;
    }
  };

  return (
    <>
      {/*mobile nav menu*/}
      <Box shadow="md">
        <chakra.header
          className="bg-headerFooter"
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
                  style={{ backgroundImage: "url(/blackMetal.jpg)" }}
                  color="gray.200"
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
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                    color="gray.200"
                    style={{ backgroundImage: "url(/blackMetal.jpg)" }}
                  />
                  <Link to={`/`} className="w-full">
                    <Button
                      style={{ backgroundImage: "url(/blackMetal.jpg)" }}
                      color="gray.200"
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
                      style={{ backgroundImage: "url(/blackMetal.jpg)" }}
                      color="gray.200"
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
                      style={{ backgroundImage: "url(/blackMetal.jpg)" }}
                      color="gray.200"
                      leftIcon={<BsFillCameraVideoFill />}
                      onClick={() => {
                        mobileNav.onClose();
                        window.scrollTo(0, 0);
                      }}
                    >
                      Videos
                    </Button>
                  </Link>

                  <Link to={`/affiliates`} className="w-full">
                    <Button
                      w="full"
                      style={{ backgroundImage: "url(/blackMetal.jpg)" }}
                      color="gray.200"
                      leftIcon={<AiOutlineLink />}
                      onClick={() => {
                        mobileNav.onClose();
                        window.scrollTo(0, 0);
                      }}
                    >
                      affiliates
                    </Button>
                  </Link>

                  <Link to={`/message`} className="w-full">
                    <Button
                      w="full"
                      style={{ backgroundImage: "url(/blackMetal.jpg)" }}
                      color="gray.200"
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
            ml={0}
            borderWidth={0}
            overflowX="auto"
            className="bg-headerFooter"
            position="fixed"
            top={0}
            width="100%"
            zIndex={999}
          >
            <Tabs defaultIndex={pageTab()} borderBottomColor="#00ff00">
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
                    to={`/affiliates`}
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
                      affiliates
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
