/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBuild } from "./Provider";
import {
  FaArrowLeft,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import { buildData } from "./assets/buildData";
import { Box, Flex, chakra, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CommentsAndReplies } from "./assets/types";
import { Image } from "@chakra-ui/react";
import branding from "../public/branding.jpg";
import toast from "react-hot-toast";

export const FullBuildInformation = () => {
  const { activeComponent, selectedVideo, setSelectedVideo } = useBuild();
  const [commentData, setCommentData] = useState<CommentsAndReplies[] | []>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [descriptionHidden, setDescriptionHidden] = useState(true);
  const [commentsHidden, setCommentsHidden] = useState(true);

  const willFullBuildInfoDisplay =
    selectedVideo && activeComponent === "Builds";

  const filteredBuild = buildData.filter(
    (build) => build.id === selectedVideo?.videoId
  );

  const cards = filteredBuild.map((entry) => entry.imageGallery);

  useEffect(() => {
    const API_KEY = "AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8";
    function fetchCommentsAndReplies(
      pageToken: string
    ): Promise<CommentsAndReplies> {
      return fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?videoId=${selectedVideo?.videoId}&key=${API_KEY}&part=snippet,replies&pageToken=${pageToken}`
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
              snippet: { topLevelComment: { snippet: any } };
              replies: { comments: any[] };
            }) => {
              const comment = thread.snippet.topLevelComment.snippet;
              const replies = thread.replies
                ? thread.replies.comments.map((reply) => reply.snippet)
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
            // @ts-expect-error/ will figure out later
            commenterName: thread.comment.authorDisplayName,
            // @ts-expect-error/ will figure out later
            commenterImage: thread.comment.authorProfileImageUrl,
            // @ts-expect-error/ will figure out later
            commenterLikes: thread.comment.likeCount,
            // @ts-expect-error/ will figure out later
            commenterDate: thread.comment.publishedAt,
            // @ts-expect-error/ will figure out later
            comment: thread.comment.textOriginal,
            // @ts-expect-error/ will figure out later
            replierName: thread.replies[0]
              ? // @ts-expect-error/ will figure out later
                thread.replies[0].authorDisplayName
              : "",
            // @ts-expect-error/ will figure out later
            replierImage: thread.replies[0]
              ? // @ts-expect-error/ will figure out later
                thread.replies[0].authorProfileImageUrl
              : "",
            // @ts-expect-error/ will figure out later
            replierLikes: thread.replies[0] ? thread.replies[0].likeCount : 0,
            // @ts-expect-error/ will figure out later
            replierDate: thread.replies[0] ? thread.replies[0].publishedAt : "",
            // @ts-expect-error/ will figure out later
            replierResponse: thread.replies[0]
              ? // @ts-expect-error/ will figure out later
                thread.replies[0].textOriginal
              : "Not replied yet",
          })
        );
        setCommentData(commentThreadData);
      })
      .catch((error) => {
        console.error("Error fetching comments and replies:", error);
      });
  }, [selectedVideo?.videoId]);

  return (
    <>
      {willFullBuildInfoDisplay && (
        <>
          <div>
            <button
              className="float-left p-3"
              onClick={() => {
                setSelectedVideo(null);
                setCommentData([]);
                setCurrentImage(0);
              }}
            >
              <FaArrowLeft />
            </button>
            <div className="flex justify-evenly">
              <span className="text-lg">
                Likes: {selectedVideo.statistics.likeCount}
              </span>
              <span className="text-lg">
                Views: {selectedVideo.statistics.viewCount}
              </span>
              <span className="text-lg">
                comments: {selectedVideo.statistics.commentCount}
              </span>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="flex bg-blueWood flex-col ">
            <iframe
              className="sm: h-60 lg: h-96"
              src={selectedVideo.embedLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            ></iframe>

            {cards.length > 0 && (
              <>
                <Flex
                  className="bg-blueWood"
                  _dark={{
                    bg: "#3e3e3e",
                  }}
                  p={50}
                  w="auto"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    w="sm"
                    bg="white"
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

                    <Box py={5} textAlign="center">
                      <div className="flex justify-evenly">
                        <button>
                          <FaArrowCircleLeft
                            size="3rem"
                            onClick={() => {
                              currentImage === 0
                                ? setCurrentImage(cards[0].length - 1)
                                : setCurrentImage(currentImage - 1);
                            }}
                          />
                        </button>
                        <span>
                          {currentImage + 1} / {cards[0].length}
                        </span>

                        <button>
                          <FaArrowCircleRight
                            size="3rem"
                            onClick={() => {
                              currentImage === cards[0].length - 1
                                ? setCurrentImage(0)
                                : setCurrentImage(currentImage + 1);
                            }}
                          />
                        </button>
                      </div>
                    </Box>
                  </Box>
                </Flex>
              </>
            )}

            <button
              className="bg-black text-white p-4"
              onClick={() => {
                setDescriptionHidden(!descriptionHidden);
                setCommentsHidden(true);
              }}
            >
              Video Description
            </button>

            <button
              className="bg-black text-white p-4"
              onClick={() => {
                setCommentsHidden(!commentsHidden);
                setDescriptionHidden(true);
              }}
            >
              Video Comments
            </button>

            <Flex
              hidden={descriptionHidden}
              _dark={{
                bg: "#3e3e3e",
              }}
              p={50}
              //w="min-content"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                maxW="sm"
                mx="auto"
                px={4}
                py={3}
                bg="white"
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
                    color="gray.800"
                    _dark={{
                      color: "white",
                    }}
                  >
                    {selectedVideo?.title}
                  </chakra.h1>
                  <Flex justifyContent="space-between" alignItems="center">
                    <chakra.span
                      fontSize="sm"
                      color="gray.800"
                      _dark={{
                        color: "gray.400",
                      }}
                    >
                      Likes: {selectedVideo.statistics.likeCount}
                    </chakra.span>
                    <chakra.span
                      fontSize="sm"
                      color="gray.800"
                      _dark={{
                        color: "gray.400",
                      }}
                    >
                      Views: {selectedVideo.statistics.viewCount}
                    </chakra.span>
                    <chakra.span
                      color="brand.800"
                      _dark={{
                        color: "brand.900",
                      }}
                      px={3}
                      py={1}
                      rounded="full"
                      textTransform="uppercase"
                      fontSize="xs"
                    >
                      comments: {selectedVideo.statistics.commentCount}
                    </chakra.span>
                  </Flex>
                  <chakra.p
                    fontSize="sm"
                    mt={2}
                    color="gray.600"
                    _dark={{
                      color: "gray.300",
                    }}
                  >
                    {selectedVideo.description}
                  </chakra.p>
                </Box>
              </Box>
            </Flex>
          </div>
        </>
      )}

      {commentData &&
        commentData.map((commentEntry) => (
          <>
            <Flex
              hidden={commentsHidden}
              className="bg-blueWood"
              _dark={{
                bg: "#3e3e3e",
              }}
              p={50}
              w="full"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                mx="auto"
                px={8}
                py={4}
                rounded="lg"
                shadow="lg"
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                maxW="sm"
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <chakra.span
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    {commentEntry.commenterDate}
                  </chakra.span>
                </Flex>

                <Box mt={2}>
                  <chakra.p
                    mt={2}
                    color="gray.600"
                    _dark={{
                      color: "gray.300",
                    }}
                  >
                    {commentEntry.comment}
                  </chakra.p>
                </Box>

                <Flex justifyContent="space-between" alignItems="center" mt={4}>
                  <Link
                    color="brand.600"
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
                      alt="avatar"
                    />
                    <Link
                      color="gray.700"
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
                    color="gray.600"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    {commentEntry.replierDate}
                  </chakra.span>
                </Flex>

                <Box mt={2}>
                  <chakra.p
                    mt={2}
                    color="gray.600"
                    _dark={{
                      color: "gray.300",
                    }}
                  >
                    {commentEntry.replierResponse}
                  </chakra.p>
                </Box>

                <Flex justifyContent="space-between" alignItems="center" mt={4}>
                  <Link
                    color="brand.600"
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
                      alt="avatar"
                    />
                    <Link
                      color="gray.700"
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
