const API_KEY = "AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8";
const fetchChannelData = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=UC68FCHckiX-U3NZcj_O_c5w&part=statistics`
  )
    .then((response) => response.json())
    .then((data) => {
      const channelData = data.items.map((item) => ({
        channelId: item.id,
        subscribers: item.statistics.subscriberCount,
        totalChannelViews: item.statistics.viewCount,
      }));

      return channelData;
    })
    .catch((error) => {
      console.error("Error fetching data from YouTube API: 0", error);
      throw error; // Rethrow the error to propagate it to the outer promise chain
    });
};

const youTubeVideos = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=UU68FCHckiX-U3NZcj_O_c5w&part=snippet&maxResults=50`
  )
    .then((response) => response.json())
    .then((data) => {
      const vidsToExclude = [
        "Vtt4dBdZQTU",
        "2vJYzLVnfYo",
        "_6kWeeA0g48",
        "Qv_VniaXuCk",
        "yg0aEIbcX0s",
        "jusCcNNhqCw",
        "808TanzGhaU",
        "WAZRkKsWcy8",
        "XmVPnZ7H6F8",
        "JlJX2vjxGpw",
        "i5aKhqMJReQ",
        "1_8K5ZWqRso",
      ];

      const allVideos = data.items.map((item) => ({
        title: item.snippet.title,
        thumbnails: item.snippet.thumbnails.high,
        videoId: item.snippet.resourceId.videoId,
        description: item.snippet.description,
        datePosted: item.snippet.publishedAt,
        embedLink: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
      }));

      const videos = allVideos.filter(
        (vid) => !vidsToExclude.includes(vid.videoId)
      );

      return videos;
    })
    .catch((error) => {
      console.error("Error fetching data from YouTube API: 1", error);
      throw error; // Rethrow the error to propagate it to the outer promise chain
    });
};

const videoStats = (videos, arrayOfPromises) => {
  return Promise.all(arrayOfPromises)
    .then((responses) => {
      return Promise.all(responses.map((res) => res.json()));
    })
    .then((statistics) => {
      const vidAndStats = videos.map((video, index) => ({
        ...video,
        statistics: {
          id: statistics[index].items[0].id,
          commentCount: statistics[index].items[0].statistics.commentCount,
          likeCount: statistics[index].items[0].statistics.likeCount,
          viewCount: statistics[index].items[0].statistics.viewCount,
        },
      }));
      return vidAndStats;
    });
};

/*
youTubeVideos()
  .then((videos) => {
    //setState here for video entries
    const fetchStatsWithIDs = videos.map((vid) =>
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${vid.videoId}&part=statistics`
      )
    );
    return videoStats(videos, fetchStatsWithIDs);
  })
  .then((vidsAndStatistics) => {
    console.log(vidsAndStatistics)
})
  .catch((error) => {
    console.error("Error handling data from YouTube API: 2", error);
  });*/
/*
const videoId = "f4yLBTJxJ_4";

function fetchCommentsAndReplies(pageToken) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/commentThreads?videoId=${videoId}&key=${API_KEY}&part=snippet,replies&pageToken=${pageToken}DELETETHIS`
  ).then((response) => response.json());
}

// Function to recursively fetch all comments and replies
function getAllCommentsAndReplies() {
  let allCommentsAndReplies = [];
  let nextPageToken = "";

  function fetchNextPage() {
    return fetchCommentsAndReplies(nextPageToken).then((response) => {
      const commentThreads = response.items;
      const commentsAndReplies = commentThreads.map((thread) => {
        const comment = thread.snippet.topLevelComment.snippet;
        const replies = thread.replies
          ? thread.replies.comments.map((reply) => reply.snippet)
          : [];
        return { comment, replies };
      });

      allCommentsAndReplies = allCommentsAndReplies.concat(commentsAndReplies);
      nextPageToken = response.nextPageToken;
      if (nextPageToken) {
        return fetchNextPage(); // Recursive call to fetch next page
      }
      return allCommentsAndReplies;
    });
  }

  return fetchNextPage();
}
*/
/*
getAllCommentsAndReplies()
  .then((commentsAndReplies) => {
    const commentThread = commentsAndReplies.flatMap((thread) => thread);
    const commentThreadData = commentThread.map((thread) => ({
      videoId: thread.comment.videoId,
      commenterName: thread.comment.authorDisplayName,
      commenterImage: thread.comment.authorProfileImageUrl,
      commenterLikes: thread.comment.likeCount,
      commenterDate: thread.comment.publishedAt,
      comment: thread.comment.textOriginal,
      replierName: thread.replies[0]
        ? thread.replies[0].authorDisplayName
        : "No replier",
      replierImage: thread.replies[0]
        ? thread.replies[0].authorProfileImageUrl
        : "",
      replierLikes: thread.replies[0] ? thread.replies[0].likeCount : 0,
      replierDate: thread.replies[0] ? thread.replies[0].publishedAt : "",
      replierResponse: thread.replies[0]
        ? thread.replies[0].textOriginal
        : "No reply",
    }));
    return commentThreadData;
  })
  .catch((error) => {
    console.error("Error fetching comments and replies:", error);
  });*/

export const Requests = {
  fetchChannelData,
  youTubeVideos,
  videoStats,
};
