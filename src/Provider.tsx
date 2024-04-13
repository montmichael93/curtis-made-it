import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  CommentsAndReplies,
  VideoData,
  channelData,
} from "../src/assets/types";
import { useParams } from "react-router-dom";
import { Requests } from "../utils/requests";

type TypeBuildsProvider = {
  channelData: channelData[] | null;
  videoData: VideoData[] | null;
  selectedVideo: VideoData | null;
  commentData: CommentsAndReplies[] | [];
  setSelectedVideo: Dispatch<SetStateAction<VideoData | null>>;
};

const buildsContext = createContext<TypeBuildsProvider>(
  {} as TypeBuildsProvider
);

export const BuildProvider = ({ children }: { children: ReactNode }) => {
  const [channelData, setChannelData] = useState<channelData[] | null>(null);
  const [videoData, setVideoData] = useState<VideoData[] | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [commentData, setCommentData] = useState<CommentsAndReplies[] | []>([]);
  const { videoId } = useParams();

  console.log(videoData);

  useEffect(() => {
    Requests.fetchChannelData()
      .then((channelData) => {
        setChannelData(channelData);
      })
      .catch((error) => {
        console.error("Error fetching channel data:", error);
      });
  }, []);

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

  useEffect(() => {
    const videoSelectedBeforeReload = videoData?.filter(
      (video) => video.videoId === videoId
    );
    videoSelectedBeforeReload && setSelectedVideo(videoSelectedBeforeReload[0]);
  }, [videoData, videoId]);

  useEffect(() => {
    const API_KEY = "AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8";
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
  }, [videoId]);

  return (
    <buildsContext.Provider
      value={{
        channelData,
        videoData,
        selectedVideo,
        commentData,
        setSelectedVideo,
      }}
    >
      {children}
    </buildsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBuild = () => useContext(buildsContext);
