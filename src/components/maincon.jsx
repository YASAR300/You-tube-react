import React from "react";
import coke from '../img/coke.png';
import thumb from '../img/Thumbnail-8.png';
import thumb4 from '../img/Thumbnail-4.png';
import thumb5 from '../img/Thumbnail-5.png';
import thumb6 from '../img/Thumbnail-6.png';
import thumb7 from '../img/Thumbnail-7.png';
import thumb8 from '../img/Thumbnail.png';
import thumb9 from '../img/Thumbnail-2.png';
import thumb10 from '../img/Thumbnail-3.png';
import thumb11 from '../img/Thumbnail-1.png';






import name from '../img/verified.png';
import thumb1 from '../img/Thumbnail-9.png';
import thumb2 from '../img/Thumbnail-10.png';
import thumb3 from '../img/Thumbnail-11.png';
import el from '../img/Ellipse 4 (2).png';
import el1 from '../img/Ellipse 4 (3).png';
import el2 from '../img/Ellipse 4 (4).png';
import el5 from '../img/Ellipse 4 (5).png';
import el6 from '../img/Ellipse 4 (6).png';
import el7 from '../img/Ellipse 1 (6).png';






import '../maincon.css';

const videoData = [
  {
    thumbnail: thumb,
    avatar: coke,
    title: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    channel: "Coke Studio Bangla",
    verified: true,
    views: "1.5M",
    time: "2 days ago",
  },
  {
    thumbnail: thumb1,
    avatar: el,
    title: "Inflix Note 12: Lorem ipsum dol Amoled lorem Hello G88 SoC!",
    channel: "ATC Android ToTo Company",
    verified: true,
    views: "4.2M",
    time: "2 days ago",
  },
  {
    thumbnail: thumb2,
    avatar: el1,
    title: "My first UX Design case study-This got me my fist job.",
    channel: "Saptarshi Prakash",
    verified: false,
    views: "4.8K",
    time: "1 year ago",
  },
  {
    thumbnail: thumb3,
    avatar: null,
    title: "My Mix",
    channel: "Lopamudra Mitra, Anupam Roy, and more",
    verified: false,
    views: null,
    time: null,
  },
  {
    thumbnail: thumb4,
    avatar: el2,
    title: "UX Design - What is it? (From AJ &Smart)",
    channel: "Aj&s]Smar",
    verified: true,
    views: "150K",
    time: "3 years ago",
  },
  {
    thumbnail: thumb5,
    avatar: null,
    title: "Introduction to React - Basics for Beginners",
    channel: "Dev Course",
    verified: true,
    views: "500K",
    time: "1 week ago",
  },
  {
    thumbnail: thumb6,
    avatar: el5,
    title: "The Future of Web Development | Trends to Watch",
    channel: "Web Dev Academy",
    verified: true,
    views: "1M",
    time: "1 month ago",
  },
  {
    thumbnail: thumb7,
    avatar: el6,
    title: "Top 10 Design Principles Every UX/UI Designer Should Know",
    channel: "UX Design Tips",
    verified: false,
    views: "250K",
    time: "3 months ago",
  },
  {
    thumbnail: thumb8,
    avatar: el7,
    title: "Best Practices for Mobile App Development",
    channel: "Tech Innovators",
    verified: false,
    views: "75K",
    time: "2 weeks ago",
  },
  {
    thumbnail: thumb9,
    avatar: el,
    title: "Understanding AI and Machine Learning in 2024",
    channel: "AI Experts",
    verified: true,
    views: "1.2M",
    time: "5 days ago",
  },
  {
    thumbnail: thumb10,
    avatar: el,
    title: "How to Build a Personal Brand Online",
    channel: "Digital Marketing Mastery",
    verified: true,
    views: "800K",
    time: "2 months ago",
  },
  {
    thumbnail: thumb11,
    avatar: el,
    title: "Exploring the Metaverse - What’s Next?",
    channel: "Future Tech Talks",
    verified: false,
    views: "200K",
    time: "1 year ago",
  },
  
];

const VideoList = () => {
  return (
    <div className="container">
      <div className="list_container">
        {videoData.map((video, index) => (
          <div className="vid_list" key={index}>
            <a href="#">
              <img src={video.thumbnail} alt="Thumbnail" className="thumbnail" />
            </a>
            <div className="flex-div">
              {video.avatar && <img src={video.avatar} alt="Avatar" />}
              <div className="vid_info">
                <a href="#">{video.title}</a>
                <p>
                  {video.channel}
                  {video.verified && (
                    <img
                      src={name}
                      alt="Verified Icon"
                      className="verify"
                    />
                  )}
                </p>
                {video.views && video.time && (
                  <p>
                    {video.views} views &bull; {video.time}
                  </p>
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
