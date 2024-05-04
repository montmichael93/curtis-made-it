import { Box, Button, Image, Link, SimpleGrid, chakra } from "@chakra-ui/react";
import { useBuild } from "../Provider";
import { affiliateLinkImages } from "../assets/affiliateLinkImages";

export const AffiliatePage = () => {
  const { affiliateLinks } = useBuild();

  //console.table(affiliateLinks);

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
          {affiliateLinkImages.map((link, index) => (
            <>
              {console.log(affiliateLinkImages[index].name === undefined)}
              <Box
                w="xs"
                bg="gray.800"
                _dark={{
                  bg: "gray.800",
                }}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                mx="auto"
                zIndex={100}
              >
                <Image
                  w="full"
                  h={56}
                  fit="cover"
                  src={link.image}
                  alt="avatar"
                />

                <Box py={5} textAlign="center">
                  <chakra.span
                    fontSize="sm"
                    color="gray.200"
                    _dark={{
                      color: "gray.200",
                    }}
                  >
                    <div> {index + 1}</div>

                    {link.name}
                  </chakra.span>
                  <Link
                    display="block"
                    fontSize="2xl"
                    color="gray.800"
                    _dark={{
                      color: "white",
                    }}
                    fontWeight="bold"
                    href={affiliateLinks[index]}
                  >
                    <Button>Buy Now</Button>
                  </Link>
                </Box>
              </Box>
            </>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};
