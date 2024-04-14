import { useBuild } from "../Provider";
import {
  FaArrowLeft,
  FaArrowCircleLeft,
  FaArrowCircleRight,
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
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = vidDescriptionData?.split(urlRegex);

  return (
    <>
      <>
        <div>
          <button
            className="float-left p-3"
            onClick={() => {
              setCurrentImage(0);
              setDescriptionHidden(true);
              setCommentsHidden(true);
              navigate("/videos");
            }}
          >
            <FaArrowLeft />
          </button>
          <div className="flex justify-evenly">
            <span className="text-lg">
              Likes: {selectedVideo?.statistics.likeCount}
            </span>
            <span className="text-lg">
              Views: {selectedVideo?.statistics.viewCount}
            </span>
            <span className="text-lg">
              comments: {selectedVideo?.statistics.commentCount}
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="flex bg-blueWood flex-col items-center">
          <iframe
            className="youtube-video"
            src={selectedVideo?.embedLink}
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
          <Flex>
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
          </Flex>

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
                    Likes: {selectedVideo?.statistics.likeCount}
                  </chakra.span>
                  <chakra.span
                    fontSize="sm"
                    color="gray.800"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    Vie ws: {selectedVideo?.statistics.viewCount}
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
                    comments: {selectedVideo?.statistics.commentCount}
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
                  {parts &&
                    parts.map((part, index) => {
                      if (part.match(urlRegex)) {
                        // If the part is a URL, render it as a clickable link

                        return (
                          <a
                            key={index}
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-500"
                          >
                            {part}
                          </a>
                        );
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
                    {commentEntry.commenterDate.slice(0, -10)}
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
                    {commentEntry.replierDate.slice(0, -10)}
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
