import React, { useState } from 'react';
import NavBar from './components/nav';
import Sidebar from './components/side';
import Line from './components/line';
import MainCon from './components/maincon'; 

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleExploreClick = () => {
    setSearchQuery('Explore'); 
  };
  const handleHomeClick = () => {
    setSearchQuery('Home');
  };

  const handleSubscriptionClick = () => {
    setSearchQuery('Subscription');
  };

  const handleLibraryClick = () => {
    setSearchQuery('Library');
  };

  const handleHistoryClick = () => {
    setSearchQuery('History');
  };
  const handleShortsClick = () => {
    setSearchQuery('Shorts'); 
  };
 

  const handleYourVideoClick = () => {
    setSearchQuery('Your videos');
  };

  const handleWatchLaterClick = () => {
    setSearchQuery('Watch later');
  };

  const handleLikedClick = () => {
    setSearchQuery('Liked videos');
  };
  const handleMenuClick = (query) => {
    setSearchQuery(query); // Update the search query when a menu item is clicked
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      <Sidebar
        onExploreClick={handleExploreClick}
        onShortsClick={handleShortsClick}
        onHomeClick={handleHomeClick}
        onSubscriptionClick={handleSubscriptionClick}
        onLibraryClick={handleLibraryClick}
        onHistoryClick={handleHistoryClick}
        onYourVideoClick={handleYourVideoClick}
        onWatchLaterClick={handleWatchLaterClick}
        onLikedClick={handleLikedClick}
      />
      
      <Line onMenuClick={handleMenuClick} /> {/* Pass handleMenuClick to Line component */}
      
      <MainCon searchQuery={searchQuery} />
    </div>
  );
};

export default App;
