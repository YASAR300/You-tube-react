import React, { useState } from 'react';
import NavBar from './components/nav';
import SideBar from './components/side';
import Line from './components/line';
import Container from './components/maincon';

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleSearch = (query) => {
      setSearchQuery(query); 
    };

    return (
        <div>
            <NavBar onSearch={handleSearch} />
            <SideBar />
            <Line />
            <Container searchQuery={searchQuery} />
        </div>
    );
};

export default App;
