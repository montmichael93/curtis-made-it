import { Box, Flex, Image, SimpleGrid, chakra } from "@chakra-ui/react";
import { useBuild } from "../Provider";
import { affiliateLinkImages } from "../assets/affiliateLinkImages";
import { FaArrowRight } from "react-icons/fa";

export const AffiliatePage = () => {
  const { affiliateLinks } = useBuild();
  console.table(affiliateLinks);

  return (
    <>
      <br />

      <div
        style={{ backgroundImage: "url(/cutwoodstack.jpg)" }}
        className="cut-wood-blurred-background  mt-10"
      >
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        >
          {affiliateLinks.length > 0 &&
            affiliateLinks.map((link, index) => (
              <>
                <Box
                  maxW="xs"
                  mx="auto"
                  bg="white"
                  _dark={{
                    bg: "gray.800",
                  }}
                  shadow="lg"
                  rounded="lg"
                  zIndex={100}
                >
                  <Box px={4} py={2}>
                    <chakra.p
                      mt={1}
                      fontSize="sm"
                      color="gray.600"
                      _dark={{
                        color: "gray.400",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi quos quidem sequi illum facere recusandae
                      voluptatibus
                    </chakra.p>
                  </Box>

                  <Image
                    h={48}
                    w="full"
                    fit="cover"
                    mt={2}
                    src={affiliateLinkImages[index]}
                    alt="affiliate"
                  />

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    px={4}
                    py={2}
                    bg="gray.900"
                    roundedBottom="lg"
                  >
                    <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                      <FaArrowRight />
                    </chakra.h1>
                    <a href={link} target="blank">
                      <chakra.button
                        px={2}
                        py={1}
                        bg="white"
                        fontSize="xs"
                        color="gray.900"
                        fontWeight="bold"
                        rounded="lg"
                        textTransform="uppercase"
                        _hover={{
                          bg: "gray.200",
                        }}
                        _focus={{
                          bg: "gray.400",
                        }}
                      >
                        shop now
                      </chakra.button>
                    </a>
                  </Flex>
                </Box>
              </>
            ))}
        </SimpleGrid>
      </div>
    </>
  );
};
