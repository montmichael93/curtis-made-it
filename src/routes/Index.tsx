import CLoveSittingDown from "../../public/CloveSittingDown.jpg";
import { FaTools } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Icon,
  chakra,
  Box,
} from "@chakra-ui/react";
import { BiHome, BiMessage, BiChair } from "react-icons/bi";
import { Image } from "@chakra-ui/react";
import { BsTools, BsEye } from "react-icons/bs";
import { MdLocationOn, MdSubscriptions } from "react-icons/md";
import { useBuild } from "../Provider";
import { MapApi } from "../MapApi";

export default function Index() {
  const { channelData } = useBuild();

  return (
    <>
      <Flex
        className="blurred-background bg-blueWood"
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Box
          w="sm"
          mx="auto"
          bg="gray.800"
          _dark={{
            bg: "gray.800",
          }}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          zIndex={100}
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            objectPosition="center"
            src={CLoveSittingDown}
            alt="avatar"
          />

          <Flex alignItems="center" px={6} py={3} bg="gray.900">
            <Icon as={BsTools} h={6} w={6} color="gray.300" />

            <chakra.h1 mx={3} color="gray.300" fontWeight="bold" fontSize="lg">
              Curtismadeit
            </chakra.h1>
          </Flex>

          <Box py={4} px={6} className="bg-blackMetal">
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color="white"
              _dark={{
                color: "white",
              }}
            >
              C Love
            </chakra.h1>

            <chakra.p
              py={2}
              color="gray.400"
              _dark={{
                color: "gray.400",
              }}
            >
              Artisanal Wood Crafter / Friend , let me know what you need built
            </chakra.p>

            <Flex
              alignItems="center"
              mt={4}
              color="gray.200"
              _dark={{
                color: "gray.200",
              }}
            >
              <Icon as={BsEye} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm" color="gray.200">
                Channel views:{" "}
                {channelData && channelData[0]?.totalChannelViews}
              </chakra.h1>
            </Flex>

            <Flex
              alignItems="center"
              mt={4}
              color="gray.200"
              _dark={{
                color: "gray.200",
              }}
            >
              <Icon as={MdSubscriptions} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm" color="gray.200">
                Subscribers: {channelData && channelData[0]?.subscribers}
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={4}
              color="gray.200"
              _dark={{
                color: "gray.200",
              }}
            >
              <Icon as={MdLocationOn} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                Houston, Texas
              </chakra.h1>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <section className="flex justify-center flex-col z-[1]">
        <SimpleGrid
          style={{ backgroundImage: "url(/blueWood.jpg)" }}
          className="blurred-background"
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          <Card color="gray.200" className="bg-blackMetal">
            <CardHeader>
              <Heading size="md">Send A Message</Heading>
            </CardHeader>
            <CardBody>
              <Text>Need Something Built? Shoot Me A Message</Text>
            </CardBody>
            <CardFooter className="self-center">
              <BiMessage size={"4rem"} />
            </CardFooter>
          </Card>

          <Card color="gray.200" className="bg-blackMetal">
            <CardHeader>
              <Heading size="md">Artisanal Builds</Heading>
            </CardHeader>
            <CardBody>
              <Text>Using The Highest Quality Wood</Text>
            </CardBody>
            <CardFooter className="self-center">
              <BiChair size={"4rem"} />
            </CardFooter>
          </Card>

          <Card color="gray.200" className="bg-blackMetal">
            <CardHeader>
              <Heading size="md">Home Improvement</Heading>
            </CardHeader>
            <CardBody>
              <Text>To Personalize Your Living Space</Text>
            </CardBody>
            <CardFooter className="self-center">
              <BiHome size={"4rem"} />
            </CardFooter>
          </Card>

          <Card color="gray.200" className="bg-blackMetal">
            <CardHeader>
              <Heading size="md">DIY</Heading>
            </CardHeader>
            <CardBody>
              <Text>The Finest In Woodcraft</Text>
            </CardBody>
            <CardFooter className="self-center">
              <FaTools size={"4rem"} />
            </CardFooter>
          </Card>
        </SimpleGrid>
      </section>
      <Card className="blurred-background bg-blueWood">
        <CardBody className="mr-4 ml-4">
          <MapApi />
        </CardBody>
      </Card>
    </>
  );
}
