import { useBuild } from "../Provider";

import {
  Flex,
  //Text,
  Box,
  chakra,
  SimpleGrid,
  //CardHeader,
  Card,
  //Heading,
  CardBody,
  //CardFooter,
  //Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

export const BuildCards = () => {
  const { videoData, setSelectedVideo } = useBuild();
  return (
    <>
      <div
        style={{ backgroundImage: "url(/cutwoodstack.jpg)" }}
        className="cut-wood-blurred-background  mt-10"
      >
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(400px, 2fr))"
        >
          {videoData?.map((video) => {
            return (
              <>
                <Card id={video.videoId} backgroundColor={"transparent"}>
                  <CardBody>
                    <Flex
                      id={video.videoId}
                      bg="transparent"
                      _dark={{
                        bg: "#3e3e3e",
                      }}
                      p={50}
                      w="full"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Flex
                        id={video.videoId}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        w="sm"
                        mx="auto"
                      >
                        <Box
                          zIndex={100}
                          id={video.videoId}
                          bg="gray.300"
                          h={64}
                          w="full"
                          rounded="lg"
                          shadow="md"
                          bgSize="cover"
                          bgPos="center"
                          style={{
                            backgroundImage: `url(${video?.thumbnails?.url})`,
                          }}
                        ></Box>
                        <Box
                          zIndex={100}
                          id={video.videoId}
                          w={{
                            base: 56,
                            md: 64,
                          }}
                          bg="gray.800"
                          _dark={{
                            bg: "gray.800",
                          }}
                          mt={-10}
                          shadow="lg"
                          rounded="lg"
                          overflow="hidden"
                        >
                          <chakra.h3
                            id={video.videoId}
                            py={2}
                            textAlign="center"
                            fontWeight="bold"
                            textTransform="uppercase"
                            color="white"
                            _dark={{
                              color: "white",
                            }}
                            letterSpacing={1}
                          >
                            {video.title}
                          </chakra.h3>

                          <Flex
                            id={video.videoId}
                            alignItems="center"
                            justifyContent="space-between"
                            py={2}
                            px={3}
                            bg="gray.700"
                            _dark={{
                              bg: "gray.700",
                            }}
                          >
                            <chakra.span
                              id={video.videoId}
                              fontWeight="bold"
                              color="gray.200"
                              _dark={{
                                color: "gray.200",
                              }}
                            >
                              views: {video.statistics.viewCount}
                            </chakra.span>
                            <Link to={`/videos/${video.videoId}`}>
                              <chakra.span
                                id={video.videoId}
                                fontWeight="bold"
                                color="gray.200"
                                _dark={{
                                  color: "gray.200",
                                }}
                                onClick={() => {
                                  setSelectedVideo(video);
                                  window.scrollTo(0, 0);
                                }}
                              >
                                <FaYoutube size={"2rem"} className="animate" />
                              </chakra.span>
                            </Link>

                            <chakra.span
                              id={video.videoId}
                              fontWeight="bold"
                              color="gray.200"
                              _dark={{
                                color: "gray.200",
                              }}
                            >
                              Comments: {video.statistics.commentCount}
                            </chakra.span>
                          </Flex>
                        </Box>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>

                {/*
              <Flex
                id={video.videoId}
                bg="transparent"
                _dark={{
                  bg: "#3e3e3e",
                }}
                p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
              >
                <Flex
                  id={video.videoId}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  w="sm"
                  mx="auto"
                >
                  <Box
                    zIndex={100}
                    id={video.videoId}
                    bg="gray.300"
                    h={64}
                    w="full"
                    rounded="lg"
                    shadow="md"
                    bgSize="cover"
                    bgPos="center"
                    style={{
                      backgroundImage: `url(${video?.thumbnails?.url})`,
                    }}
                  ></Box>

                  <Box
                    zIndex={100}
                    id={video.videoId}
                    w={{
                      base: 56,
                      md: 64,
                    }}
                    bg="gray.800"
                    _dark={{
                      bg: "gray.800",
                    }}
                    mt={-10}
                    shadow="lg"
                    rounded="lg"
                    overflow="hidden"
                  >
                    <chakra.h3
                      id={video.videoId}
                      py={2}
                      textAlign="center"
                      fontWeight="bold"
                      textTransform="uppercase"
                      color="white"
                      _dark={{
                        color: "white",
                      }}
                      letterSpacing={1}
                    >
                      {video.title}
                    </chakra.h3>

                    <Flex
                      id={video.videoId}
                      alignItems="center"
                      justifyContent="space-between"
                      py={2}
                      px={3}
                      bg="gray.700"
                      _dark={{
                        bg: "gray.700",
                      }}
                    >
                      <chakra.span
                        id={video.videoId}
                        fontWeight="bold"
                        color="gray.200"
                        _dark={{
                          color: "gray.200",
                        }}
                      >
                        views: {video.statistics.viewCount}
                      </chakra.span>
                      <Link to={`/videos/${video.videoId}`}>
                        <chakra.span
                          id={video.videoId}
                          fontWeight="bold"
                          color="gray.200"
                          _dark={{
                            color: "gray.200",
                          }}
                          onClick={() => {
                            setSelectedVideo(video);
                          }}
                        >
                          <FaYoutube size={"2rem"} />
                        </chakra.span>
                      </Link>

                      <chakra.span
                        id={video.videoId}
                        fontWeight="bold"
                        color="gray.200"
                        _dark={{
                          color: "gray.200",
                        }}
                      >
                        Comments: {video.statistics.commentCount}
                      </chakra.span>
                    </Flex>
                  </Box>
                </Flex>
                 </Flex> */}
              </>
            );
          })}
        </SimpleGrid>
      </div>
    </>
  );
};
