import { useBuild } from "./Provider";
import toast from "react-hot-toast";
import brand from "../public/branding.jpg";
import { Flex, Box, chakra } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Requests } from "../utils/requests";
import { VideoData } from "./assets/types";
import { MdPlayArrow } from "react-icons/md";

export const BuildCards = () => {
  const { activeComponent, selectedVideo, setSelectedVideo } = useBuild();
  const isBuildSectionSelected =
    activeComponent === "Builds" && selectedVideo === null;
  const [videoData, setVideoData] = useState<VideoData[] | null>(null);

  useEffect(() => {
    Requests.youTubeVideos()
      .then((videos) => {
        const API_KEY = "AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8";
        const fetchStatsWithIDs = videos.map((vid: VideoData) =>
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${vid.videoId}&part=statistics`
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
        className="flex-container"
        style={{ backgroundImage: "url(/blueWood.jpg )" }}
      >
        {isBuildSectionSelected &&
          videoData?.map((video) => {
            return (
              <>
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
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    w="sm"
                    mx="auto"
                  >
                    <Box
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
                        alignItems="center"
                        justifyContent="space-between"
                        py={2}
                        px={3}
                        bg="black"
                        _dark={{
                          bg: "gray.700",
                        }}
                      >
                        <chakra.span
                          fontWeight="bold"
                          color="white"
                          _dark={{
                            color: "gray.200",
                          }}
                        >
                          views: {video.statistics.viewCount}
                        </chakra.span>

                        <chakra.button
                          fontWeight="bold"
                          color="white"
                          _dark={{
                            color: "gray.200",
                          }}
                          onClick={() => {
                            toast(() => (
                              <span className="flex flex-col items-center">
                                <img
                                  className="w-16 rounded-[50%]"
                                  src={brand}
                                />
                                <b>{video.title}</b>
                              </span>
                            ));
                            setSelectedVideo(video);
                          }}
                        >
                          <MdPlayArrow />
                        </chakra.button>

                        <chakra.span
                          fontWeight="bold"
                          color="white"
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
              </>
            );
          })}
      </div>
    </>
  );
};
