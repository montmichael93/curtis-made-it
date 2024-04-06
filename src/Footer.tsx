import { Flex, Icon, chakra } from "@chakra-ui/react";
import Brand from "../public/branding.jpg";
import { FaYoutube, FaInstagram } from "react-icons/fa";
export const FooterSection = () => {
  return (
    <>
      <Flex
        w="full"
        bg="black"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          w="full"
          as="footer"
          flexDir={{
            base: "column",
            sm: "row",
          }}
          align="center"
          justify="space-between"
          px="6"
          py="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
        >
          <chakra.a
            href="#"
            fontSize="xl"
            fontWeight="bold"
            color="gray.600"
            _dark={{
              color: "white",
              _hover: {
                color: "gray.300",
              },
            }}
            _hover={{
              color: "gray.700",
            }}
          >
            CurtisMadeIt
          </chakra.a>

          <chakra.p
            py={{
              base: "2",
              sm: "0",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
          >
            All rights reserved
          </chakra.p>

          <Flex mx="-2">
            <chakra.a
              href="#"
              mx="2"
              color="gray.600"
              _dark={{
                color: "gray.300",
                _hover: {
                  color: "gray.400",
                },
              }}
              _hover={{
                color: "gray.500",
              }}
              aria-label="Reddit"
            >
              <Icon boxSize="5" viewBox="0 0 24 24" fill="currentColor">
                <path></path>
              </Icon>
            </chakra.a>

            <chakra.a
              href="#"
              mx="2"
              color="gray.600"
              _dark={{
                color: "gray.300",
                _hover: {
                  color: "gray.400",
                },
              }}
              _hover={{
                color: "gray.500",
              }}
              aria-label="Facebook"
            >
              <FaYoutube
                size={"2rem"}
                href="https://www.youtube.com/@CurtisMadeIt"
              />
            </chakra.a>

            <chakra.a
              href="#"
              mx="2"
              color="gray.600"
              _dark={{
                color: "gray.300",
                _hover: {
                  color: "gray.400",
                },
              }}
              _hover={{
                color: "gray.500",
              }}
              aria-label="Github"
            >
              <FaInstagram
                href="https://www.instagram.com/curtis_made_it/"
                size={"2rem"}
              />
            </chakra.a>
          </Flex>
        </Flex>
      </Flex>

      <div className="footer" hidden={true}>
        <a>
          <FaYoutube
            size={"2rem"}
            href="https://www.youtube.com/@CurtisMadeIt"
          />
        </a>
        <img className="temp-brand-bottom" src={Brand} />
        <a href="https://www.instagram.com/curtis_made_it/">
          <FaInstagram size={"2rem"} />
        </a>
      </div>
    </>
  );
};
