import React from 'react';
import home from '../img/home.png';
import explore from '../img/explore.png';
import shorts from '../img/shorts.png'; // Import the shorts image
import subscription from '../img/subscription.png';
import library from '../img/library.png';
import history from '../img/history.png';
import yourVideo from '../img/your_video.png';
import watchLater from '../img/watch_later.png';
import liked from '../img/liked.png';
import downArrow from '../img/down_arrow.png';
import ellipse1 from '../img/Ellipse 1.png';
import coke from '../img/coke.png';
import mkbhd from '../img/MKbhd.png';
import figma from '../img/f.png';
import androidToTo from '../img/Ellipse 1 (4).png';
import alux from '../img/Ellipse 1 (5).png';
import '../side.css';

const Sidebar = ({ onExploreClick, onShortsClick }) => {
  const shortcutLinks = [
    { id: 1, imgSrc: home, label: 'Home' },
    { id: 2, imgSrc: explore, label: 'Explore' },
    { id: 3, imgSrc: shorts, label: 'Shorts' }, // Added the "Shorts" link
    { id: 4, imgSrc: subscription, label: 'Subscription' },
    { id: 5, imgSrc: library, label: 'Library' },
    { id: 6, imgSrc: history, label: 'History' },
    { id: 7, imgSrc: yourVideo, label: 'Your videos' },
    { id: 8, imgSrc: watchLater, label: 'Watch later' },
    { id: 9, imgSrc: liked, label: 'Liked videos' },
    { id: 10, imgSrc: downArrow, label: 'Show more' },
  ];

  const subscriptions = [
    { id: 1, imgSrc: ellipse1, label: 'Nadir On The Go •' },
    { id: 2, imgSrc: coke, label: 'Coke Studio Bangla' },
    { id: 3, imgSrc: mkbhd, label: 'MKBHD' },
    { id: 4, imgSrc: figma, label: 'Figma' },
    { id: 5, imgSrc: androidToTo, label: 'ATC Android ToTo c...' },
    { id: 6, imgSrc: alux, label: 'Alux.com' },
  ];

  return (
    <div className="sidebar">
      <div className="shortcut_links">
        {/* Render all shortcut links */}
        {shortcutLinks.map((link) => (
          <a
            href="#"
            key={link.id}
            onClick={
              link.label === 'Explore'
                ? () => onExploreClick() 
                : link.label === 'Shorts'
                ? () => onShortsClick() 
                : null
            }
          >
            <img src={link.imgSrc} alt={link.label} />
            <p>{link.label}</p>
          </a>
        ))}
        <div className="library">
          <hr />
          {shortcutLinks.slice(4).map((link) => (
            <a href="#" key={link.id}>
              <img src={link.imgSrc} alt={link.label} />
              <p>{link.label}</p>
            </a>
          ))}
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIPTION</h3>
        {subscriptions.map((sub) => (
          <a href="#" key={sub.id}>
            <img src={sub.imgSrc} alt={sub.label} />
            <p>{sub.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
