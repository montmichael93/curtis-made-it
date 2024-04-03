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

//const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8';

/////////////////////////////////Videos///////////////////////////////////////////
/*
const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8';
// Example request to retrieve information about a video by its ID
fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=UU68FCHckiX-U3NZcj_O_c5w&part=snippet&maxResults=50`)
  .then(response => response.json())
  .then(data => {
    // Process the API response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching data from YouTube API:', error);
  });*/
//////////////////////////////////Video Data///////////////////////////////////////////
/*
const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8';
fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=UU68FCHckiX-U3NZcj_O_c5w&part=snippet&maxResults=50`)
  .then(response => response.json())
  .then(data => {
    // Process the API response data
    if (data.items) {
      const videos = data.items.map(item => ({
        title: item.snippet.title,
        //thumbnails: item.snippet.thumbnails.standard,
        //videoId: item.snippet.resourceId.videoId
        //description: item.snippet.description,
        //datePosted: item.snippet.publishedAt,
        //embedLink: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`
      }));
      console.log(videos.map((item) => item.title));
    } else {
      console.log('No items found in the response.');
    }
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching data from YouTube API:', error);
  });*/
/////////////////////////////Video Comments///////////////////////////////////////////
/*
const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8';
const videoId = 'f4yLBTJxJ_4'
// Function to fetch comments for a video
const fetchComments = (pageToken = '') => {
  return fetch(`https://www.googleapis.com/youtube/v3/commentThreads?videoId=${videoId}&key=${API_KEY}&part=snippet&pageToken=${pageToken}`)
    .then(response => response.json());
};

// Function to recursively fetch all comments
const getAllComments = async () => {
  let allComments = [];
  let nextPageToken = '';

  do {
    const response = await fetchComments(nextPageToken);
    const comments = response.items.map(item => item.snippet.topLevelComment.snippet);
    allComments = allComments.concat(comments);
    nextPageToken = response.nextPageToken;
  } while (nextPageToken);

  return allComments;
};

// Usage: Fetch all comments and log them
getAllComments()
  .then(comments => {
    console.log(comments);
  })
  .catch(error => {
    console.error('Error fetching comments:', error);
  });*/
/////////////////////////Video Comments and replies/////////////////////////////////
/*
const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8';
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
    console.log(commentsAndReplies);
  })
  .catch(error => {
    console.error('Error fetching comments and replies:', error);
  });*/

///////////////////////////////////subscriber count///////////////////
/*
const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8';
fetch(`https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=UC68FCHckiX-U3NZcj_O_c5w&part=statistics`)
  .then(response => response.json())
  .then(data => {
    // Process the API response data
    if (data.items && data.items.length > 0) {
      const subscriberCount = data.items[0].statistics.subscriberCount;
      console.log("Subscriber count:", subscriberCount);
    } else {
      console.log('Channel not found or no statistics available.');
    }
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching data from YouTube API:', error);
  });*/

///////////////////////////video view count//////////////////////
/*
const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8';
const videoId = 'f4yLBTJxJ_4'
fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoId}&part=statistics`)
  .then(response => response.json())
  .then(data => {
    // Process the API response data
    if (data.items && data.items.length > 0) {
      const viewCount = data.items[0].statistics.viewCount;
      console.log("View count:", viewCount);
    } else {
      console.log('Video not found or no statistics available.');
    }
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching data from YouTube API:', error);
  });*/

/*

///////////////////video likes amount///////////////////////////////
const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8';
const videoId = 'f4yLBTJxJ_4'
fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoId}&part=statistics`)
  .then(response => response.json())
  .then(data => {
    // Process the API response data
    if (data.items && data.items.length > 0) {
      const likeCount = data.items[0].statistics.likeCount;
      console.log("Like count:", likeCount);
    } else {
      console.log('Video not found or no statistics available.');
    }
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching data from YouTube API:', error);
  });

*/

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//const API_KEY = 'AIzaSyDHZZogp5RCcjTOrZe_pYvzukZAByew0P8'

//////////////////////subscriber count//////////////////////////////////
/*
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


const comments = (arrayOfPromises) => {
    return Promise.all(arrayOfPromises)
    .then((responses) => {
      return Promise.all(responses.map((res) => res.json()));
    })
    .then((data) => {
      const commentItems = data.flatMap((commentsData) => commentsData.items)
      //const comments
      //console.log(commentItems.map((commEntry) => commEntry.snippet.topLevelComment))
      
      const commentsData = commentItems.map((comms) => ({
        id: comms.snippet.topLevelComment.id,
        videoId: comms.snippet.topLevelComment.snippet.videoId,
        name: comms.snippet.topLevelComment.snippet.authorDisplayName,
        image: comms.snippet.topLevelComment.snippet.authorProfileImageUrl,
        likes: comms.snippet.topLevelComment.snippet.likeCount,
        date: comms.snippet.topLevelComment.snippet.publishedAt,
        commentText: comms.snippet.topLevelComment.snippet.textOriginal
      }))
     return commentsData
  
      
   })
}


const repliesToComments = (arrayOfPromises) => {
    return Promise.all(arrayOfPromises)
    .then((responses) => {
      return Promise.all(responses.map((res) => res.json()));
    })
    .then((data) => {
      
      console.log(data)
      
     //const commentReplyItems = data.flatMap((commentsData) => commentsData.items)
     
     
     
     
     
     //const ReplyTocommentsData = commentReplyItems.map((comms) => ({
       // id: comms.snippet.topLevelComment.id,
       // videoId: comms.snippet.topLevelComment.snippet.videoId,
       // name: comms.snippet.topLevelComment.snippet.authorDisplayName,
       // image: comms.snippet.topLevelComment.snippet.authorProfileImageUrl,
       // likes: comms.snippet.topLevelComment.snippet.likeCount,
       // date: comms.snippet.topLevelComment.snippet.publishedAt,
       // commentText: comms.snippet.topLevelComment.snippet.textOriginal
      //}))
     //console.log(ReplyTocommentsData)
     //return ReplyTocommentsData
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
    return comments(fetchCommentsWithIds)
  })
    .then((videoComments) => {
    // set video stats 
    const pageToken = '';
    const fetchCommentsReplies = videoComments.map((vid) => fetch(`https://www.googleapis.com/youtube/v3/commentThreads?videoId=${vid.videoId}&key=${API_KEY}&part=snippet,replies&pageToken=${pageToken}`))
    return repliesToComments(fetchCommentsReplies)
   
    
  
  })


  .catch((error) => {
    console.error('Error handling data from YouTube API: 2', error);
  }); 

*/
