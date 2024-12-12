// import React, { useEffect, useState } from "react";
// import coke from '../img/coke.png';
// import thumb from '../img/Thumbnail-8.png';
// import thumb4 from '../img/Thumbnail-4.png';
// import thumb5 from '../img/Thumbnail-5.png';
// import thumb6 from '../img/Thumbnail-6.png';
// import thumb7 from '../img/Thumbnail-7.png';
// import thumb8 from '../img/Thumbnail.png';
// import thumb9 from '../img/Thumbnail-2.png';
// import thumb10 from '../img/Thumbnail-3.png';
// import thumb11 from '../img/Thumbnail-1.png';

// import name from '../img/verified.png';
// import thumb1 from '../img/Thumbnail-9.png';
// import thumb2 from '../img/Thumbnail-10.png';
// import thumb3 from '../img/Thumbnail-11.png';
// import el from '../img/Ellipse 4 (2).png';
// import el1 from '../img/Ellipse 4 (3).png';
// import el2 from '../img/Ellipse 4 (4).png';
// import el5 from '../img/Ellipse 4 (5).png';
// import el6 from '../img/Ellipse 4 (6).png';
// import el7 from '../img/Ellipse 1 (6).png';

// import '../maincon.css';

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     fetch("https://backend-06ow.onrender.com/grid")
//       .then((response) => response.json())
//       .then((data) => setVideos(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="container">
//       <div className="list_container">
//         {videos.map((video, index) => (
//           <div className="vid_list" key={index}>
//             <a href="#">
//               <img src={video.img} alt="Thumbnail" className="thumbnail" />
//             </a>
//             <div className="flex-div">
//               <img src={video.smallimg} alt="Avatar" />
//               <div className="vid_info">
//                 <a href="#">{video.title}</a>
//                 <p>{video.subtitle1}</p>
//                 {video.subtitle2 && <p>{video.subtitle2}</p>}
//                 {video.subtitleimg && (
//                   <img src={video.subtitleimg} alt="Verified Icon" className="verify" />
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoList;


// 



// import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player";
// import "../maincon.css";

// const VideoList = ({ searchQuery }) => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideoId, setSelectedVideoId] = useState(null);

//   const API_KEY = "AIzaSyBTP5vxG4JZSSH84RKOCIx0GvpnSEMlicE";

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const query = searchQuery.trim() || "song"; 
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`
//         );
//         const data = await response.json();

//         const formattedData = data.items.map((item) => ({
//           img: item.snippet.thumbnails.medium.url,
//           smallimg: item.snippet.thumbnails.default.url,
//           title: item.snippet.title,
//           subtitle1: item.snippet.channelTitle,
//           // subtitle2: item.snippet.description,
//           subtitleimg: null, 
//         }));

//         setVideos(formattedData);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, [searchQuery]);

//   return (
//     <div className="container">
//       <div className="list_container">
//         {videos.map((video, index) => (
//           <div className="vid_list" key={index}>
//             <a href={`https://www.youtube.com/watch?v=${video.videoId}`}>
//               <img src={video.img} alt="Thumbnail" className="thumbnail" />
//             </a>
//             <div className="flex-div">
//               <img src={video.smallimg} alt="Avatar" />
//               <div className="vid_info">
//                 <a href="#">{video.title}</a>
//                 <p>{video.subtitle1}</p>
//                 {video.subtitle2 && <p>{video.subtitle2}</p>}
//                 {video.subtitleimg && (
//                   <img
//                     src={video.subtitleimg}
//                     alt="Verified Icon"
//                     className="verify"
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoList;


// import React, { useEffect, useState } from "react";
// import "../maincon.css";

// const VideoList = ({ searchQuery }) => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideoId, setSelectedVideoId] = useState(null);

//   const API_KEY = "AIzaSyBTP5vxG4JZSSH84RKOCIx0GvpnSEMlicE";

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const query = searchQuery.trim() || "song"; 
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`
//         );
//         const data = await response.json();

//         const formattedData = data.items.map((item) => ({
//           videoId: item.id.videoId,
//           img: item.snippet.thumbnails.medium.url,
//           smallimg: item.snippet.thumbnails.default.url,
//           title: item.snippet.title,
//           subtitle1: item.snippet.channelTitle,
//         }));

//         setVideos(formattedData);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, [searchQuery]);

//   return (
//     <div className="container">
      
//       {selectedVideoId && (
//         <div className="video-player">
//           <div className="player-wrapper">
//             <iframe
//               src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0&modestbranding=1`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="video-iframe"
//             ></iframe>
//             <button
//               onClick={() => setSelectedVideoId(null)}
//               className="close-button"
//             >
//               Close Player
//             </button>
//           </div>
//         </div>
//       )}

     
//       <div className="list_container">
//         {videos.map((video, index) => (
//           <div
//             className="vid_list"
//             key={index}
//             onClick={() => setSelectedVideoId(video.videoId)} // Set selected video ID on click
//           >
//             <img src={video.img} alt="Thumbnail" className="thumbnail" />
//             <div className="flex-div">
//               <img src={video.smallimg} alt="Avatar" />
//               <div className="vid_info">
//                 <p className="video-title">{video.title}</p>
//                 <p>{video.subtitle1}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoList;



import React, { useEffect, useState } from "react";
import "../maincon.css";

const VideoList = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [apiKeyIndex, setApiKeyIndex] = useState(0);

  
  const API_KEYS = [
    "AIzaSyBTP5vxG4JZSSH84RKOCIx0GvpnSEMlicE",
    "AIzaSyBHh9dFkk-g-G7cGX5agOrSLQIZLNJtOoI",
    "AIzaSyBAddwjFlPZlTTUVs1WtvgClSPt_U64q0g",
    "AIzaSyBtoE06oic0F8vg1yRRXpRcqsAKYwvRL1E",
    "AIzaSyACsLlqXKdpk49b56Wemi7sgo-jZigVNnw",


  ];

  
  const fetchVideos = async () => {
    const query = searchQuery.trim() || "song";
    const currentApiKey = API_KEYS[apiKeyIndex];

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${currentApiKey}`
      );
      const data = await response.json();

     
      if (data.error) {
        if (data.error.code === 403) {
          
          setApiKeyIndex((prevIndex) => (prevIndex + 1) % API_KEYS.length);
          return;
        }
      }

      const formattedData = data.items.map((item) => ({
        videoId: item.id.videoId,
        img: item.snippet.thumbnails.medium.url,
        smallimg: item.snippet.thumbnails.default.url,
        title: item.snippet.title,
        subtitle1: item.snippet.channelTitle,
      }));

      setVideos(formattedData);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [searchQuery, apiKeyIndex]);

  return (
    <div className="container">
      {selectedVideoId && (
        <div className="video-player">
          <div className="player-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
            <button
              onClick={() => setSelectedVideoId(null)}
              className="close-button"
            >
              Close Player
            </button>
          </div>
        </div>
      )}

      <div className="list_container">
        {videos.map((video, index) => (
          <div
            className="vid_list"
            key={index}
            onClick={() => setSelectedVideoId(video.videoId)} 
          >
            <img src={video.img} alt="Thumbnail" className="thumbnail" />
            <div className="flex-div">
              <img src={video.smallimg} alt="Avatar" />
              <div className="vid_info">
                <p className="video-title">{video.title}</p>
                <p>{video.subtitle1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
