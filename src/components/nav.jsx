import React from 'react';
import hambarger from '../img/hambarger.png';
import logo from '../img/Youtube logo.png';
import searchIcon from '../img/search.png';
import mic from '../img/mic.png';
import create from '../img/create.png';
import more from '../img/more.png';
import bell from '../img/bell.png';
import userIcon from '../img/Ellipse 4-1.png';
import '../nav.css'; 

const NavBar = () => {
    
    const navItems = [
        { id: 1, src: hambarger, alt: 'Menu Icon', className: 'menu_icon', section: 'left' },
        { id: 2, src: logo, alt: 'YouTube Logo', className: 'logo', section: 'left' },
        { id: 3, src: searchIcon, alt: 'Search Icon', className: '', section: 'center' },
        { id: 4, src: mic, alt: 'Mic Icon', className: 'mic_icon', section: 'center' },
        { id: 5, src: create, alt: 'Create Icon', className: '', section: 'right' },
        { id: 6, src: more, alt: 'More Icon', className: '', section: 'right' },
        { id: 7, src: bell, alt: 'Bell Icon', className: '', section: 'right' },
        { id: 8, src: userIcon, alt: 'User Icon', className: 'user_icon', section: 'right' },
    ];

 
    const renderNavSection = (section) =>
        navItems
            .filter((item) => item.section === section) 
            .map((item) => ( 
                <img key={item.id} src={item.src} alt={item.alt} className={item.className} />
            ));

    return (
        <nav className="flex-di">
            <div className="nav_left flex-di">
                {renderNavSection('left')}
            </div>
            <div className="center flex-di">
                <div className="search-box flex-di">
                    <input type="text" placeholder="Search" />
                    {renderNavSection('center').filter((_, index) => index === 0)}
                </div>
                {renderNavSection('center').filter((_, index) => index === 1)} 
            </div>
            <div className="nav_right flex-di">
                {renderNavSection('right')}
            </div>
        </nav>
    );
};

export default NavBar;
