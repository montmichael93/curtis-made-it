import { Flex, Icon, chakra } from "@chakra-ui/react";
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
        style={{ backgroundImage: "url(/headerFooter.png)" }}
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
          className="bg-blackMetal"
        >
          <chakra.a
            href="#"
            fontSize="xl"
            fontWeight="bold"
            color="white"
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
            color="white"
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
              color="gray.300"
              _dark={{
                color: "gray.300",
                _hover: {
                  color: "gray.400",
                },
              }}
              _hover={{
                color: "gray.400",
              }}
              aria-label="Reddit"
            >
              <Icon boxSize="5" viewBox="0 0 24 24" fill="currentColor">
                <path></path>
              </Icon>
            </chakra.a>

            <chakra.a
              href="https://www.youtube.com/@CurtisMadeIt"
              mx="2"
              color="gray.300"
              _hover={{
                color: "gray.400",
              }}
            >
              <FaYoutube size={"2rem"} />
            </chakra.a>

            <chakra.a
              href="https://www.instagram.com/curtis_made_it/"
              mx="2"
              color="gray.300"
              _hover={{
                color: "gray.400",
              }}
            >
              <FaInstagram size={"2rem"} />
            </chakra.a>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
