import { Box, Flex, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { forSaleBuilds } from "../assets/forSale";

export const Shopping = () => {
  return (
    <>
      <br />
      <br />
      <br />
      {forSaleBuilds.map((build) => (
        <div>
          <Flex
            //bg="#3e3e3e"
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
            className="cut-wood-blurred-background bg-blueWood"
          >
            <Box
              zIndex={100}
              className="bg-blackMetal"
              mx={{
                lg: 8,
              }}
              display={{
                lg: "flex",
              }}
              maxW={{
                lg: "5xl",
              }}
              shadow={{
                lg: "lg",
              }}
              rounded={{
                lg: "lg",
              }}
            >
              <Box
                w={{
                  lg: "50%",
                }}
              >
                <Box
                  h={{
                    base: 64,
                    lg: "full",
                  }}
                  rounded={{
                    lg: "lg",
                  }}
                  bgSize="cover"
                  style={{
                    backgroundImage: `url(${build.image})`,
                  }}
                ></Box>
              </Box>

              <Box
                py={12}
                px={6}
                maxW={{
                  base: "xl",
                  lg: "5xl",
                }}
                w={{
                  lg: "50%",
                }}
              >
                <chakra.h2
                  fontSize={{
                    base: "2xl",
                    md: "3xl",
                  }}
                  color="white"
                  fontWeight="bold"
                >
                  {build.name}
                </chakra.h2>
                <chakra.p
                  mt={4}
                  color="white"
                  fontSize={{
                    base: "2xl",
                    md: "3xl",
                  }}
                >
                  {!Array.isArray(build.price)
                    ? `$${build.price}`
                    : `1 for $${build.price[0]} ${""}
                    3 for $${build.price[1]}
                    8 for $${build.price[2]}`}
                </chakra.p>
                <p className="text-gray-400">{build.description}</p>
                <chakra.p mt={4} color="transparent">
                  ____________________________________________________
                  ____________________________________________________
                </chakra.p>

                <Box mt={8}>
                  <Link
                    to={`/message`}
                    className="bg-gray-100 color text-gray-900 px-5 py-3 font-semibold rounded-lg hover:bg-slate-800"
                  >
                    Shop Now
                  </Link>
                </Box>
              </Box>
            </Box>
          </Flex>
        </div>
      ))}

      <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        className="cut-wood-blurred-background bg-blueWood"
      >
        <Box
          zIndex={100}
          className="bg-blackMetal"
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "50%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage: "url('bluePrints.jpg')",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}
          >
            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="white"
              fontWeight="bold"
            >
              Blue Prints
            </chakra.h2>
            <chakra.p mt={4} color="gray.400">
              Need a guide to help you build? if you are new to wood working,
              this guide might be helpful for first timers to get started.
            </chakra.p>

            <Box mt={8}>
              <Link
                to={`/message`}
                className="bg-gray-100 color text-gray-900 px-5 py-3 font-semibold rounded-lg hover:bg-slate-800"
              >
                get your blue prints now
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
