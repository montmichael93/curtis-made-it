import aboutMePageImage from "../../public/CLoveOnTopOfDogHouse.jpg";
import { FaChurch, FaHandshake, FaYoutubeSquare } from "react-icons/fa";
import toast from "react-hot-toast";
import { Card, CardBody, Flex, chakra } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { MapApi } from "../MapApi";

export const AboutPage = () => {
  return (
    <>
      <Flex
        style={{ backgroundImage: "url(/blueWood.jpg)" }}
        className="blurred-background"
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Box
          zIndex={100}
          bg="gray.800"
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
          onClick={() => {
            toast("Welcome To Curtismadeit! ✝️", {
              icon: "😎👌🔥",
              style: { background: "#333", color: "#fff" },
            });
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
                backgroundImage: `url(${aboutMePageImage})`,
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
            <div className="flex flex-col items-center">
              <FaChurch size={"4rem"} className="text-white" />
              <chakra.h2
                fontSize={{
                  base: "2xl",
                  md: "3xl",
                }}
                color="white"
                fontWeight="bold"
              >
                Thanks For Stopping By
              </chakra.h2>
            </div>

            <chakra.p mt={4} color="gray.400">
              <p className="text-left indent-[18px]">
                I appreciate you taking the time to support this tiny piece of
                the internet and I hope you have a wonderfully happy anniversary
                or birthday if you have one of those today.In this space, we are
                a passion-driven company and community of woodworkers and
                creators looking to continually self develop.
              </p>
              <br />
              <p className="text-left indent-[18px]">
                {" "}
                Through encouraging, inspiring, motivating, learning, and
                helping one another while we create simple woodworking projects
                and other novel creations. This community was born in the month
                of October in the year of our Christ 2019 through an extreme
                stroke of luck and a blessing straight from Him.{" "}
              </p>
            </chakra.p>
          </Box>
        </Box>
      </Flex>

      <Flex
        style={{ backgroundImage: "url(/blueWood.jpg)" }}
        className="blurred-background"
        p={5}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          zIndex={100}
          w="full"
          maxW="lg"
          mx="auto"
          px={4}
          py={3}
          bg="gray.800"
          shadow="md"
          rounded="md"
          onClick={() => {
            toast("Join The Community! 🤝", {
              icon: "🌎",
              style: { background: "#333", color: "#fff" },
            });
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            direction="column"
          >
            <FaHandshake size={"4rem"} className="text-white" />
            <Box>
              <chakra.p fontSize="sm" mt={2} color="gray.300">
                <p className="text-left indent-[18px]">
                  We’ve continued to grow because of the enormous support and
                  networking experience that has been created by users from all
                  over the world interacting with one another.
                </p>
                <br />
                <p className="text-left indent-[18px]">
                  {" "}
                  Curiosity and friendship are two things that drive us. Here,
                  we embrace new opportunities to learn and explore new
                  horizons. We take pride in being a reliable source of
                  knowledge and inspiration, hoping to awaken the creativity
                  that may be hidden inside of you.
                </p>{" "}
                <br />
                <p className="text-left indent-[18px]">
                  As for me, Curtis, the primary creator and host, I’m an avid
                  experimenter and DIY enthusiast who loves to try new things
                  and share them with others who may want to try the same thing
                  or something similar.
                </p>
              </chakra.p>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        style={{ backgroundImage: "url(/blueWood.jpg)" }}
        className="blurred-background"
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          zIndex={100}
          w="full"
          maxW="lg"
          mx="auto"
          px={4}
          py={3}
          bg="gray.800"
          shadow="md"
          rounded="md"
          onClick={() => {
            toast("Like And Subscribe ! 👍", {
              icon: "🎬 🎥 🔴 ▶",
              style: { background: "#333", color: "#fff" },
            });
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            direction="column"
          >
            <FaYoutubeSquare size={"4rem"} className="text-white" />
            <Box>
              <chakra.p fontSize="sm" mt={2} color="gray.300">
                <p className="text-left indent-[18px]">
                  Due to the success of the primary YouTube channel, I try to
                  post a new video about once a month on a topic or build that I
                  hope you will find interesting. I’ve got a long list and I’ve
                  got a short list, but to be honest with you, I never really
                  know what the next video is going to be.
                </p>
                <br />
                <p className="text-left indent-[18px]">
                  {" "}
                  I always make sure to spend the time to make the videos
                  informative, entertaining, funny, or otherwise useful to
                  everyone that watches them. Monumental efforts are gone to to
                  make sure your time is well spent in this area. The main topic
                  posted on YouTube is simple woodworking projects. I try to
                  keep them smaller and simpler because I’ve had back surgery
                  twice so I can’t be lifting *all* of the boards all the time.
                </p>
                <br />
                <p className="text-left indent-[18px]">
                  {" "}
                  I do enjoy a nice deck or fence build though. Also posted on
                  YouTube will be a mix of life tips, homestead hacks, and other
                  potentially useful items of interest. As your own creativity
                  is unleashed by something you may discover here, please don’t
                  ever hesitate to reach out for assistance with your projects.
                  I make myself as available as I can to help as needed based on
                  my desire to share the knowledge I have and the experiences
                  I’ve gone through.
                </p>
              </chakra.p>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Card
        style={{ backgroundImage: "url(/blueWood.jpg)" }}
        className="blurred-background"
      >
        <CardBody className="mr-10 ml-10">
          <MapApi />
        </CardBody>
      </Card>
    </>
  );
};
