import { Box, Button, Image, Link, SimpleGrid, chakra } from "@chakra-ui/react";
//import { useBuild } from "../Provider";
import {
  affiliateLinkImages,
  linksToRemove,
} from "../assets/affiliateLinkImages";
import { useEffect, useState } from "react";
import { Requests } from "../../utils/requests";
import { VideoData } from "../../utils/types";

export const AffiliatePage = () => {
  const [affiliateLinks, setAffiliateLinks] = useState<string[] | []>([]);
  //const { affiliateLinks } = useBuild();

  //console.table(affiliateLinks);

  useEffect(() => {
    Requests.youTubeVideos()
      .then((videos) => {
        const fetchStatsWithIDs = videos.map((vid: VideoData) =>
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&id=${vid.videoId}&part=statistics`
          )
        );
        const allVideosDescription = videos.map(
          (vid: VideoData) => vid.description
        );
        const urlRegex = /(https?:\/\/[^\s]+)/gi;
        const getAllDescriptions = allVideosDescription.map(
          (description: string) => {
            return description?.split(urlRegex);
          }
        );
        const flattenDescriptionsIntoOne = getAllDescriptions.flatMap(
          (text: string[]) => {
            return text;
          }
        );

        const getAllAffiliateLinks = flattenDescriptionsIntoOne.filter(
          (text: string) => {
            if (text.match(urlRegex)) {
              return text;
            }
          }
        );
        const removeDuplicateLinks = getAllAffiliateLinks.filter(
          (value: string, index: number) =>
            getAllAffiliateLinks.indexOf(value) === index
        );

        setAffiliateLinks(
          removeDuplicateLinks.filter(
            (link: string) => !linksToRemove.includes(link)
          )
        );
        return Requests.videoStats(videos, fetchStatsWithIDs);
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
        <br />
        <br />
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        >
          {affiliateLinkImages.map((link, index) => (
            <>
              <Box
                w="xs"
                bg="gray.800"
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
                  src={link.image}
                  alt="avatar"
                />

                <Box py={5} textAlign="center">
                  <chakra.span
                    fontSize="sm"
                    color="gray.200"
                    _dark={{
                      color: "gray.200",
                    }}
                  >
                    <div> {index + 1}</div>

                    {link.name}
                  </chakra.span>
                  <Link
                    display="block"
                    fontSize="2xl"
                    color="gray.800"
                    _dark={{
                      color: "white",
                    }}
                    fontWeight="bold"
                    href={affiliateLinks[index]}
                  >
                    <Button>Buy Now</Button>
                  </Link>
                </Box>
              </Box>
            </>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};
