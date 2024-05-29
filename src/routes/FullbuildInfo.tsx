import { useBuild } from "../Provider";
import {
  FaArrowLeft,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaThumbsUp,
  FaEye,
  FaCommentDots,
} from "react-icons/fa";

import { buildData } from "../assets/buildData";
import { Box, Flex, chakra, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import branding from "../../public/branding.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { Requests } from "../../utils/requests";
import { CommentsAndReplies, VideoData } from "../../utils/types";

export const FullBuildInformation = () => {
  const { selectedVideo, setSelectedVideo } = useBuild();
  const [currentImage, setCurrentImage] = useState(0);
  const [videoData, setVideoData] = useState<VideoData[] | null>(null);
  const [descriptionHidden, setDescriptionHidden] = useState(true);
  const [commentData, setCommentData] = useState<CommentsAndReplies[] | []>([]);
  const [commentsHidden, setCommentsHidden] = useState(true);
  const [vidDescriptionData, setVidDescriptionData] = useState<string | null>(
    null
  );
  const navigate = useNavigate();
  const { videoId } = useParams();

  const filteredBuild = buildData.filter(
    (build) => build.id === selectedVideo?.videoId
  );
  const cards = filteredBuild.map((entry) => entry.imageGallery);
  const urlRegex = /(https?:\/\/[^\s]+|\bCurtis_Made_It\b)/gi;
  const parts = vidDescriptionData?.split(urlRegex);

  useEffect(() => {
    const videoSelectedBeforeReload = videoData?.filter(
      (video) => video.videoId === videoId
    );
    videoSelectedBeforeReload && setSelectedVideo(videoSelectedBeforeReload[0]);
    selectedVideo && setVidDescriptionData(selectedVideo?.description);
  }, [selectedVideo, setSelectedVideo, vidDescriptionData, videoData, videoId]);

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
  }, [selectedVideo?.description, vidDescriptionData]);

  useEffect(() => {
    function fetchCommentsAndReplies(
      pageToken: string
    ): Promise<CommentsAndReplies> {
      return fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?videoId=${videoId}&key=${process.env.API_KEY}&part=snippet,replies&pageToken=${pageToken}`
      ).then((response) => response.json());
    }

    // Function to recursively fetch all comments and replies
    function getAllCommentsAndReplies() {
      let allCommentsAndReplies: CommentsAndReplies[] | [] = [];
      let nextPageToken = "";
      function fetchNextPage(): Promise<CommentsAndReplies[] | []> {
        return fetchCommentsAndReplies(nextPageToken).then((response) => {
          // @ts-expect-error/ will figure out later
          const commentThreads = response.items;
          const commentsAndReplies = commentThreads.map(
            (thread: {
              snippet: { topLevelComment: { snippet: unknown } };
              replies: { comments: unknown[] };
            }) => {
              const comment = thread.snippet.topLevelComment.snippet;
              const replies = thread.replies
                ? // @ts-expect-error/ will figure out later
                  thread.replies.comments.map((reply) => reply.snippet)
                : [];
              return { comment, replies };
            }
          );

          allCommentsAndReplies =
            allCommentsAndReplies.concat(commentsAndReplies);
          // @ts-expect-error/ will figure out later
          nextPageToken = response.nextPageToken;
          if (nextPageToken) {
            return fetchNextPage(); // Recursive call to fetch next page
          }
          return allCommentsAndReplies;
        });
      }

      return fetchNextPage();
    }

    getAllCommentsAndReplies()
      .then((commentsAndReplies) => {
        const commentThread = commentsAndReplies.flatMap((thread) => thread);
        const commentThreadData: CommentsAndReplies[] = commentThread.map(
          (thread) => ({
            // @ts-expect-error/ will figure out later
            videoId: thread.comment.videoId,
            // @ts-expect-error/ will add types later
            commenterName: thread.comment.authorDisplayName,
            // @ts-expect-error/ will add types later
            commenterImage: thread.comment.authorProfileImageUrl,
            // @ts-expect-error/ will add types later
            commenterLikes: thread.comment.likeCount,
            // @ts-expect-error/  will add types later
            commenterDate: thread.comment.publishedAt,
            // @ts-expect-error/ will add types later
            comment: thread.comment.textOriginal,
            // @ts-expect-error/ will add types later
            replierName: thread.replies[0]
              ? // @ts-expect-error/ will add types later
                thread.replies[0].authorDisplayName
              : "",
            // @ts-expect-error/  will add types later
            replierImage: thread.replies[0]
              ? // @ts-expect-error/  will add types later
                thread.replies[0].authorProfileImageUrl
              : "",
            // @ts-expect-error/  will add types later
            replierLikes: thread.replies[0] ? thread.replies[0].likeCount : 0,
            // @ts-expect-error/ will add types later
            replierDate: thread.replies[0] ? thread.replies[0].publishedAt : "",
            // @ts-expect-error/  will add types later
            replierResponse: thread.replies[0]
              ? // @ts-expect-error/ will add types later
                thread.replies[0].textOriginal
              : "Not replied yet",
          })
        );
        setCommentData(commentThreadData);
      })
      .catch((error) => {
        console.error("Error fetching comments and replies:", error);
      });
  }, [selectedVideo?.videoId, videoId]);

  return (
    <>
      <>
        <div className="flex items-center bg-blackMetal mt-16">
          <button
            className=" p-3"
            onClick={() => {
              setCurrentImage(0);
              setDescriptionHidden(true);
              setCommentsHidden(true);
              navigate("/videos");
            }}
          >
            <FaArrowLeft className="text-gray-300" />
          </button>
          <span className="text-base text-gray-300">Go Back</span>
        </div>

        <div className="flex justify-evenly bg-blackMetal ">
          <span className="text-xl text-gray-300 flex flex-col items-center">
            <FaThumbsUp />{" "}
            <span> Likes: {selectedVideo?.statistics.likeCount} </span>
          </span>

          <span className="text-xl text-gray-300 flex flex-col items-center">
            <FaEye />
            <span> Views: {selectedVideo?.statistics.viewCount}</span>
          </span>
          <span className="text-xl text-gray-300 flex flex-col items-center">
            <FaCommentDots />{" "}
            <span> comments: {selectedVideo?.statistics.commentCount} </span>
          </span>
        </div>

        <div className="flex bg-blueWood flex-col items-center pt-4 blurred-background">
          <iframe
            className="youtube-video z-50"
            src={selectedVideo?.embedLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          ></iframe>

          {cards.length === 0 && (
            <Flex
              p={50}
              w="full"
              alignItems="center"
              justifyContent="center"
              className="bg-blueWood"
            >
              <Box
                w="xs"
                bg="white"
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
                  src={branding}
                  alt="avatar"
                />

                <Box py={5} textAlign="center" className="bg-blackMetal">
                  <chakra.span
                    fontSize="sm"
                    color="gray.200"
                    _dark={{
                      color: "gray.200",
                    }}
                  >
                    Photos coming soon...
                  </chakra.span>
                </Box>
              </Box>
            </Flex>
          )}

          {cards.length > 0 && (
            <>
              <Flex
                zIndex={100}
                _dark={{
                  bg: "#3e3e3e",
                }}
                p={50}
                w="auto"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  zIndex={100}
                  w="sm"
                  bg="gray.800"
                  _dark={{
                    bg: "gray.800",
                  }}
                  shadow="lg"
                  rounded="lg"
                  overflow="hidden"
                  mx="auto"
                >
                  <Image
                    w="full"
                    h="max-content"
                    fit="cover"
                    src={cards[0][currentImage]}
                    alt="avatar"
                  />

                  <Box
                    py={5}
                    textAlign="center"
                    zIndex={100}
                    className="bg-blackMetal"
                  >
                    <div className="flex justify-evenly">
                      <span>
                        <FaArrowCircleLeft
                          className="text-gray-300"
                          size="3rem"
                          onClick={() => {
                            currentImage === 0
                              ? setCurrentImage(cards[0].length - 1)
                              : setCurrentImage(currentImage - 1);
                          }}
                        />
                      </span>
                      <span className="z-50 text-white">
                        {currentImage + 1} / {cards[0].length}
                      </span>

                      <span>
                        <FaArrowCircleRight
                          className="text-gray-300"
                          size="3rem"
                          onClick={() => {
                            currentImage === cards[0].length - 1
                              ? setCurrentImage(0)
                              : setCurrentImage(currentImage + 1);
                          }}
                        />
                      </span>
                    </div>
                  </Box>
                </Box>
              </Flex>
            </>
          )}
          <Flex className="flex gap-10">
            <button
              className="bg-blackMetal text-gray-300 p-4 z-50"
              onClick={() => {
                setDescriptionHidden(!descriptionHidden);
                setCommentsHidden(true);
              }}
            >
              Video Description
            </button>

            <button
              className="bg-blackMetal text-gray-300 p-4 z-50"
              onClick={() => {
                setCommentsHidden(!commentsHidden);
                setDescriptionHidden(true);
              }}
            >
              Video Comments
            </button>
          </Flex>

          <Flex
            zIndex={100}
            hidden={descriptionHidden}
            _dark={{
              bg: "#3e3e3e",
            }}
            p={50}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              maxW="sm"
              mx="auto"
              px={4}
              py={3}
              bg="gray.800"
              _dark={{
                bg: "gray.800",
              }}
              shadow="md"
              rounded="md"
            >
              <Box>
                <chakra.h1
                  fontSize="lg"
                  fontWeight="bold"
                  mt={2}
                  color="white"
                  _dark={{
                    color: "white",
                  }}
                >
                  {selectedVideo?.title}
                </chakra.h1>
                <Flex justifyContent="space-between" alignItems="center">
                  <chakra.span
                    fontSize="sm"
                    color="gray.400"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    Likes: {selectedVideo?.statistics.likeCount}
                  </chakra.span>
                  <chakra.span
                    fontSize="sm"
                    color="gray.400"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    Views: {selectedVideo?.statistics.viewCount}
                  </chakra.span>
                  <chakra.span
                    color="gray.400"
                    _dark={{
                      color: "brand.900",
                    }}
                    px={3}
                    py={1}
                    rounded="full"
                    textTransform="uppercase"
                    fontSize="xs"
                  >
                    comments: {selectedVideo?.statistics.commentCount}
                  </chakra.span>
                </Flex>
                <chakra.p
                  fontSize="sm"
                  mt={2}
                  color="gray.300"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  {parts &&
                    parts.map((part, index) => {
                      if (part.match(urlRegex)) {
                        if (part.startsWith("http")) {
                          return (
                            <a
                              className="text-sky-400"
                              key={index}
                              href={part}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {part}
                            </a>
                          );
                        } else {
                          return (
                            <a
                              className="text-sky-400"
                              key={index}
                              href="https://www.instagram.com/curtis_made_it/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {part}
                            </a>
                          );
                        }
                      } else {
                        return part;
                      }
                    })}
                </chakra.p>
              </Box>
            </Box>
          </Flex>
        </div>
      </>

      {commentData &&
        commentData.map((commentEntry) => (
          <>
            <Flex
              hidden={commentsHidden}
              className="bg-blueWood  blurred-background"
              _dark={{
                bg: "#3e3e3e",
              }}
              p={50}
              w="full"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                zIndex={100}
                mx="auto"
                px={8}
                py={4}
                rounded="lg"
                shadow="lg"
                bg="gray.800"
                _dark={{
                  bg: "gray.800",
                }}
                maxW="sm"
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <chakra.span
                    fontSize="sm"
                    color="gray.400"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    {commentEntry.commenterDate.slice(0, -10)}
                  </chakra.span>
                </Flex>

                <Box mt={2}>
                  <chakra.p
                    mt={2}
                    color="gray.300"
                    _dark={{
                      color: "gray.300",
                    }}
                  >
                    {commentEntry.comment}
                  </chakra.p>
                </Box>

                <Flex justifyContent="space-between" alignItems="center" mt={4}>
                  <Link
                    color="brand.400"
                    _dark={{
                      color: "brand.400",
                    }}
                    _hover={{
                      textDecor: "underline",
                    }}
                  >
                    {commentEntry.commenterLikes > "0"
                      ? `Likes: ${commentEntry.commenterLikes}`
                      : ""}
                  </Link>

                  <Flex alignItems="center">
                    <Image
                      mx={4}
                      w={10}
                      h={10}
                      rounded="full"
                      fit="cover"
                      display={{
                        base: "none",
                        sm: "block",
                      }}
                      src={commentEntry.commenterImage}
                    />
                    <Link
                      color="gray.200"
                      _dark={{
                        color: "gray.200",
                      }}
                      fontWeight="700"
                      cursor="pointer"
                    >
                      {commentEntry.commenterName}
                    </Link>
                  </Flex>
                </Flex>
                <br />
                <hr />
                <br />

                <Flex justifyContent="space-between" alignItems="center">
                  <chakra.span
                    fontSize="sm"
                    color="gray.400"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    {commentEntry.replierDate.slice(0, -10)}
                  </chakra.span>
                </Flex>

                <Box mt={2}>
                  <chakra.p
                    mt={2}
                    color="gray.300"
                    _dark={{
                      color: "gray.300",
                    }}
                  >
                    {commentEntry.replierResponse}
                  </chakra.p>
                </Box>

                <Flex justifyContent="space-between" alignItems="center" mt={4}>
                  <Link
                    color="brand.400"
                    _dark={{
                      color: "brand.400",
                    }}
                    _hover={{
                      textDecor: "underline",
                    }}
                  >
                    {commentEntry.replierLikes > "0"
                      ? `Likes: ${commentEntry.replierLikes}`
                      : ""}
                  </Link>

                  <Flex alignItems="center">
                    <Image
                      mx={4}
                      w={10}
                      h={10}
                      rounded="full"
                      fit="cover"
                      display={{
                        base: "none",
                        sm: "block",
                      }}
                      src={
                        commentEntry.replierImage
                          ? commentEntry.replierImage
                          : branding
                      }
                    />
                    <Link
                      color="gray.200"
                      _dark={{
                        color: "gray.200",
                      }}
                      fontWeight="700"
                      cursor="pointer"
                    >
                      {commentEntry.replierName ? commentEntry.replierName : ""}
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </>
        ))}
    </>
  );
};
