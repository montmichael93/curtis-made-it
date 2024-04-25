/* eslint-disable @typescript-eslint/no-explicit-any */
const API_KEY = "AIzaSyDBQO59MuGO-ShK5NKRmW8SI9yo1-TuEHM";
const fetchChannelData = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=UC68FCHckiX-U3NZcj_O_c5w&part=statistics`
  )
    .then((response) => response.json())
    .then((data) => {
      const channelData = data.items.map(
        (item: {
          id: any;
          statistics: { subscriberCount: any; viewCount: any };
        }) => ({
          channelId: item.id,
          subscribers: item.statistics.subscriberCount,
          totalChannelViews: item.statistics.viewCount,
        })
      );

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

      const allVideos = data.items.map(
        (item: {
          snippet: {
            title: any;
            thumbnails: { high: any };
            resourceId: { videoId: any };
            description: any;
            publishedAt: any;
          };
        }) => ({
          title: item.snippet.title,
          thumbnails: item.snippet.thumbnails.high,
          videoId: item.snippet.resourceId.videoId,
          description: item.snippet.description,
          datePosted: item.snippet.publishedAt,
          embedLink: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
        })
      );

      const videos = allVideos.filter(
        (vid: { videoId: string }) => !vidsToExclude.includes(vid.videoId)
      );

      return videos;
    })
    .catch((error) => {
      console.error("Error fetching data from YouTube API: 1", error);
      throw error; // Rethrow the error to propagate it to the outer promise chain
    });
};

const videoStats = (videos: any[], arrayOfPromises: any) => {
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

export const Requests = {
  fetchChannelData,
  youTubeVideos,
  videoStats,
};
