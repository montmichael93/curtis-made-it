import { useBuild } from "../Provider";

import {
  Flex,
  Box,
  chakra,
  SimpleGrid,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { FaThumbsUp, FaEye, FaCommentDots } from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Requests } from "../../utils/requests";
import { VideoData } from "../../utils/types";
//import { linksToRemove } from "../assets/affiliateLinkImages";

export const BuildCards = () => {
  const { setSelectedVideo } = useBuild();
  const [videoData, setVideoData] = useState<VideoData[] | null>(null);
  //const [videoData, setVideoData] = useState<VideoData[] | null>(null);
  //const [affiliateLinks, setAffiliateLinks] = useState<string[] | []>([]);
  //const [vidDescriptionData, setVidDescriptionData] = useState<string | null>(
  //null
  //);
  // console.log(videoData?.sort((vid) => vid.statistics.viewCount))

  useEffect(() => {
    Requests.youTubeVideos()
      .then((videos) => {
        const fetchStatsWithIDs = videos.map((vid: VideoData) =>
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&id=${vid.videoId}&part=statistics`
          )
        );
        return Requests.videoStats(videos, fetchStatsWithIDs);
      })
      .then((vidsAndStatistics) => {
        setVideoData(vidsAndStatistics);
      })
      .catch((error) => {
        console.error("Error fetching channel data:", error);
      });
  }, []);
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
                <Card id={video.videoId} className="m-12 bg-blackMetal">
                  <CardBody>
                    <Flex
                      id={video.videoId}
                      bg="transparent"
                      _dark={{
                        bg: "#3e3e3e",
                      }}
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
                          bg="black"
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
                            <div className="flex flex-col items-center">
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
                                  <FaYoutube
                                    size={"2rem"}
                                    className="animate"
                                  />
                                </chakra.span>
                              </Link>
                            </div>
                          </chakra.h3>

                          <Flex
                            id={video.videoId}
                            alignItems="center"
                            justifyContent="space-between"
                            py={2}
                            px={3}
                            bg="gray.800"
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
                              <span className="flex flex-col">
                                <FaThumbsUp /> {video.statistics.likeCount}
                              </span>
                            </chakra.span>

                            <chakra.span
                              id={video.videoId}
                              fontWeight="bold"
                              color="gray.200"
                              _dark={{
                                color: "gray.200",
                              }}
                            >
                              <div className="flex flex-col items-center">
                                <Link to={`/videos/${video.videoId}`}>
                                  <chakra.span
                                    id={video.videoId}
                                    fontWeight="bold"
                                    color="gray.200"
                                    _dark={{
                                      color: "gray.200",
                                    }}
                                  ></chakra.span>
                                </Link>
                                <FaEye /> {video.statistics.viewCount}
                              </div>
                            </chakra.span>

                            <chakra.span
                              id={video.videoId}
                              fontWeight="bold"
                              color="gray.200"
                              _dark={{
                                color: "gray.200",
                              }}
                            >
                              <span className="flex flex-col items-center">
                                <FaCommentDots />
                                {video.statistics.commentCount}
                              </span>
                            </chakra.span>
                          </Flex>
                        </Box>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>
              </>
            );
          })}
        </SimpleGrid>
      </div>
    </>
  );
};
