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



import React, { useEffect, useState } from "react";
import "../maincon.css";

const VideoList = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);

  const API_KEY = "AIzaSyBAddwjFlPZlTTUVs1WtvgClSPt_U64q0g";

  useEffect(() => {
    const fetchVideos = async () => {
      const query = searchQuery.trim() || "song"; 
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`
        );
        const data = await response.json();

        const formattedData = data.items.map((item) => ({
          img: item.snippet.thumbnails.medium.url,
          smallimg: item.snippet.thumbnails.default.url,
          title: item.snippet.title,
          subtitle1: item.snippet.channelTitle,
          // subtitle2: item.snippet.description,
          subtitleimg: null, 
        }));

        setVideos(formattedData);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [searchQuery]);

  return (
    <div className="container">
      <div className="list_container">
        {videos.map((video, index) => (
          <div className="vid_list" key={index}>
            <a href="#">
              <img src={video.img} alt="Thumbnail" className="thumbnail" />
            </a>
            <div className="flex-div">
              <img src={video.smallimg} alt="Avatar" />
              <div className="vid_info">
                <a href="#">{video.title}</a>
                <p>{video.subtitle1}</p>
                {video.subtitle2 && <p>{video.subtitle2}</p>}
                {video.subtitleimg && (
                  <img
                    src={video.subtitleimg}
                    alt="Verified Icon"
                    className="verify"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
