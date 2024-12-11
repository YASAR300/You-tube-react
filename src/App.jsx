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
  const handleShortsClick = () => {
    setSearchQuery('Shorts'); 
  };
  return (
    <div>
      
      <NavBar onSearch={handleSearch} />
      
      
      <Sidebar onExploreClick={handleExploreClick} onShortsClick={handleShortsClick} />
      
      
      <Line />
      
      
      <MainCon searchQuery={searchQuery} />
    </div>
  );
};

export default App;
