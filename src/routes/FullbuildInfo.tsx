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
import { useState } from "react";
import { Image } from "@chakra-ui/react";
import branding from "../../public/branding.jpg";
import { useNavigate } from "react-router-dom";

export const FullBuildInformation = () => {
  const { selectedVideo, commentData, vidDescriptionData } = useBuild();
  const [currentImage, setCurrentImage] = useState(0);
  const [descriptionHidden, setDescriptionHidden] = useState(true);
  const [commentsHidden, setCommentsHidden] = useState(true);
  const navigate = useNavigate();
  const filteredBuild = buildData.filter(
    (build) => build.id === selectedVideo?.videoId
  );
  const cards = filteredBuild.map((entry) => entry.imageGallery);

  const urlRegex = /(https?:\/\/[^\s]+|\bCurtis_Made_It\b)/gi;
  const parts = vidDescriptionData?.split(urlRegex);
  return (
    <>
      <>
        <div className="flex items-center bg-gray-800 mt-16">
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

        <div className="flex justify-evenly bg-gray-800 ">
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

                  <Box py={5} textAlign="center" zIndex={100}>
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
              className="bg-gray-800 text-gray-300 p-4 z-50"
              onClick={() => {
                setDescriptionHidden(!descriptionHidden);
                setCommentsHidden(true);
              }}
            >
              Video Description
            </button>

            <button
              className="bg-gray-800 text-gray-300 p-4 z-50"
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
            //w="min-content"
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
                        // If the part is a URL, render it as a clickable link
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
                          // If the part is 'curtis_made_it', render it as a link
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
                        // Otherwise, render it as plain text
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
