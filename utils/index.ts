// eslint-disable-next-line @typescript-eslint/no-unused-vars
let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

//const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8'

//////////////////////subscriber and channel view count//////////////////////////////////
/*
const channelData = () => {
 fetch(`https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=UC68FCHckiX-U3NZcj_O_c5w&part=statistics`)
  .then(response => response.json())
  .then((data) => {
        const channelData = data.items.map((item) => ({
        channelId: item.id,
        subscribers: item.statistics.subscriberCount,
        totalChannelViews: item.statistics.viewCount
      }));
    
    console.log(channelData)
  })
   .catch((error) => {
      console.error('Error fetching data from YouTube API: 0', error);
      throw error; // Rethrow the error to propagate it to the outer promise chain
    });
  
}

channelData()
*/

/*
const yTubeAPI = () => {
   return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=UU68FCHckiX-U3NZcj_O_c5w&part=snippet&maxResults=50`)
   .then(response => response.json())
    .then((data) => {
      const videos = data.items.map((item) => ({
        title: item.snippet.title,
        thumbnails: item.snippet.thumbnails.standard,
        videoId: item.snippet.resourceId.videoId,
        description: item.snippet.description,
        datePosted: item.snippet.publishedAt,
        embedLink: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`
    }));   
      return videos;
    })
    .catch((error) => {
      console.error('Error fetching data from YouTube API: 1', error);
      throw error; // Rethrow the error to propagate it to the outer promise chain
    });
};


const videoStats = (arrayOfPromises) => {
  return Promise.all(arrayOfPromises)
    .then((responses) => {
      return Promise.all(responses.map((res) => res.json()));
    })
    .then((data) => {   
      const vidStats = data.map((vid) => ({
        id: vid.items[0].id,
        commentCount: vid.items[0].statistics.commentCount,
        likeCount: vid.items[0].statistics.likeCount,
        viewCount: vid.items[0].statistics.viewCount,
      }))
      return vidStats; 
    });
};





const commentsAndReplies = (arrayOfPromises) => {
    return Promise.all(arrayOfPromises)
    .then((responses) => {
      return Promise.all(responses.map((res) => res.json()));
    })
    
    
    
    
    
}











yTubeAPI()
  .then((videos) => {
  //setState here for video entries
  const fetchStatsWithIDs = videos.map((vid) => fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${vid.videoId}&part=statistics`))
    return videoStats(fetchStatsWithIDs)
  })
  .then((videoStatistics) => {
    // set video stats 
    const pageToken = '';
    const fetchCommentsWithIds = videoStatistics.map((vid) => fetch(`https://www.googleapis.com/youtube/v3/commentThreads?videoId=${vid.id}&key=${API_KEY}&part=snippet&pageToken=${pageToken}`))
    //return comments(fetchCommentsWithIds)
  })
  .catch((error) => {
    console.error('Error handling data from YouTube API: 2', error);
  }); 
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 * const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8';
const videoId = 'f4yLBTJxJ_4'

function fetchCommentsAndReplies(pageToken) {
  return fetch(`https://www.googleapis.com/youtube/v3/commentThreads?videoId=${videoId}&key=${API_KEY}&part=snippet,replies&pageToken=${pageToken}`)
    .then(response => response.json());
}

// Function to recursively fetch all comments and replies
function getAllCommentsAndReplies() {
  let allCommentsAndReplies = [];
  let nextPageToken = '';

  function fetchNextPage() {
    return fetchCommentsAndReplies(nextPageToken)
      .then(response => {
        const commentThreads = response.items;
        const commentsAndReplies = commentThreads.map(thread => {
          const comment = thread.snippet.topLevelComment.snippet;
          const replies = thread.replies ? thread.replies.comments.map(reply => reply.snippet) : [];
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

// Usage: Fetch all comments and replies and log them
getAllCommentsAndReplies()
  .then(commentsAndReplies => {
const commentThread = commentsAndReplies.flatMap((thread) => thread)
const commentThreadData = commentThread.map((thread) => ({
    videoId: thread.comment.videoId,
    commenterName: thread.comment.authorDisplayName,
    commenterImage: thread.comment.authorProfileImageUrl,
    commenterLikes: thread.comment.likeCount,
    commenterDate: thread.comment.publishedAt,
    comment: thread.comment.textOriginal,
    replyerName: thread.replies[0] ? thread.replies[0].authorDisplayName : 'No replyer',
    replyerImage: thread.replies[0] ? thread.replies[0].authorProfileImageUrl : '',
    replyerLikes: thread.replies[0] ? thread.replies[0].likeCount : 0,
    replyerDate: thread.replies[0] ? thread.replies[0].publishedAt : '',
    replyerResponse: thread.replies[0] ? thread.replies[0].textOriginal : 'No reply'
}))
  console.log(commentThreadData)
  
  })
  .catch(error => {
    console.error('Error fetching comments and replies:', error);
  });
 */

/**
   * 
   * const API_KEY = "AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8";

const youTubeVideos = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=UU68FCHckiX-U3NZcj_O_c5w&part=snippet&maxResults=50`
  )
    .then((response) => response.json())
    .then((data) => {
      const videos = data.items.map((item) => ({
        title: item.snippet.title,
        thumbnails: item.snippet.thumbnails.standard,
        videoId: item.snippet.resourceId.videoId,
        description: item.snippet.description,
        datePosted: item.snippet.publishedAt,
        embedLink: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
      }));
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
  .then((vidsAndstatistics) => {
    console.log(vidsAndstatistics)
})
  .catch((error) => {
    console.error("Error handling data from YouTube API: 2", error);
  });
   * 
   * 
   */
