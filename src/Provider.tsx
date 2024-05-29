import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  //useEffect,
  useState,
} from "react";
import { VideoData } from "../utils/types";
//import { useParams } from "react-router-dom";
//import { Requests } from "../utils/requests";
//import { linksToRemove } from "./assets/affiliateLinkImages";

type TypeBuildsProvider = {
  //videoData: VideoData[] | null;
  selectedVideo: VideoData | null;
  //commentData: CommentsAndReplies[] | [];
  //vidDescriptionData: string | null;
  //affiliateLinks: string[] | [];
  setSelectedVideo: Dispatch<SetStateAction<VideoData | null>>;
};

const buildsContext = createContext<TypeBuildsProvider>(
  {} as TypeBuildsProvider
);

export const BuildProvider = ({ children }: { children: ReactNode }) => {
  //const [videoData, setVideoData] = useState<VideoData[] | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  //const [commentData, setCommentData] = useState<CommentsAndReplies[] | []>([]);
  // const [affiliateLinks, setAffiliateLinks] = useState<string[] | []>([]);
  //const [vidDescriptionData, setVidDescriptionData] = useState<string | null>(
  //null
  //);
  //const { videoId } = useParams();

  //const path = location.pathname;
  /*
  useEffect(() => {
    Requests.youTubeVideos()
      .then((videos) => {
        const API_KEY = "AIzaSyBhi_xeQRFKdBMcnQTEir7Wrvl02LaSCLQ";
        const fetchStatsWithIDs = videos.map((vid: VideoData) =>
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${vid.videoId}&part=statistics`
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
      .then((vidsAndStatistics) => {
        setVideoData(vidsAndStatistics);
      })
      .catch((error) => {
        console.error("Error fetching channel data:", error);
      });
  }, [vidDescriptionData]);

  useEffect(() => {
    const videoSelectedBeforeReload = videoData?.filter(
      (video) => video.videoId === videoId
    );
    videoSelectedBeforeReload && setSelectedVideo(videoSelectedBeforeReload[0]);
    selectedVideo && setVidDescriptionData(selectedVideo?.description);
  }, [selectedVideo, vidDescriptionData, videoData, videoId]);

  useEffect(() => {
    const API_KEY = "AIzaSyBhi_xeQRFKdBMcnQTEir7Wrvl02LaSCLQ";
    function fetchCommentsAndReplies(
      pageToken: string
    ): Promise<CommentsAndReplies> {
      return fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?videoId=${videoId}&key=${API_KEY}&part=snippet,replies&pageToken=${pageToken}`
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
  }, [videoId]);*/

  return (
    <buildsContext.Provider
      value={{
        // videoData,
        selectedVideo,
        //commentData,
        //vidDescriptionData,
        //affiliateLinks,
        setSelectedVideo,
      }}
    >
      {children}
    </buildsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBuild = () => useContext(buildsContext);
