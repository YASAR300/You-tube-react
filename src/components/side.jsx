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

const Sidebar = ({
  onExploreClick,
  onShortsClick,
  onHomeClick,
  onSubscriptionClick,
  onLibraryClick,
  onHistoryClick,
  onYourVideoClick,
  onWatchLaterClick,
  onLikedClick,
}) => {
  const shortcutLinks = [
    { id: 1, imgSrc: home, label: 'Home', onClick: onHomeClick },
    { id: 2, imgSrc: explore, label: 'Explore', onClick: onExploreClick },
    { id: 3, imgSrc: shorts, label: 'Shorts', onClick: onShortsClick },
    { id: 4, imgSrc: subscription, label: 'Subscription', onClick: onSubscriptionClick },
    { id: 5, imgSrc: library, label: 'Library', onClick: onLibraryClick },
    { id: 6, imgSrc: history, label: 'History', onClick: onHistoryClick },
    { id: 7, imgSrc: yourVideo, label: 'Your videos', onClick: onYourVideoClick },
    { id: 8, imgSrc: watchLater, label: 'Watch later', onClick: onWatchLaterClick },
    { id: 9, imgSrc: liked, label: 'Liked videos', onClick: onLikedClick },
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
            onClick={link.onClick} // Assign the onClick function dynamically
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
