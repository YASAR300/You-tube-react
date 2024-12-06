import React from 'react';
import NavBar from './components/nav';
import SideBar from './components/side';
import Line from './components/line';
import Container from './components/maincon';




const App = () => {
    return (
        <div>
            <NavBar />
            <SideBar />
            <Line />
            <Container />
        </div>
    );
};

export default App;
