// import React, { useState } from 'react';
// import hambarger from '../img/hambarger.png';
// import logo from '../img/Youtube logo.png';
// import searchIcon from '../img/search.png';
// import mic from '../img/mic.png';
// import create from '../img/create.png';
// import more from '../img/more.png';
// import bell from '../img/bell.png';
// import userIcon from '../img/Ellipse 4-1.png';
// import '../nav.css';

// const NavBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const navItems = [
//     { id: 1, src: hambarger, alt: 'Menu Icon', className: 'menu_icon', section: 'left' },
//     { id: 2, src: logo, alt: 'YouTube Logo', className: 'logo', section: 'left' },
//     { id: 3, src: searchIcon, alt: 'Search Icon', className: '', section: 'center' },
//     { id: 4, src: mic, alt: 'Mic Icon', className: 'mic_icon', section: 'center' },
//     { id: 5, src: create, alt: 'Create Icon', className: '', section: 'right' },
//     { id: 6, src: more, alt: 'More Icon', className: '', section: 'right' },
//     { id: 7, src: bell, alt: 'Bell Icon', className: '', section: 'right' },
//     { id: 8, src: userIcon, alt: 'User Icon', className: 'user_icon', section: 'right' },
//   ];

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     onSearch(e.target.value); // Pass search query to parent component
//   };

//   const renderNavSection = (section) =>
//     navItems
//       .filter((item) => item.section === section)
//       .map((item) => (
//         <img key={item.id} src={item.src} alt={item.alt} className={item.className} />
//       ));

//   return (
//     <nav className="flex-di">
//       <div className="nav_left flex-di">
//         {renderNavSection('left')}
//       </div>
//       <div className="center flex-di">
//         <div className="search-box flex-di">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           {renderNavSection('center').filter((_, index) => index === 0)}
//         </div>
//         {renderNavSection('center').filter((_, index) => index === 1)}
//       </div>
//       <div className="nav_right flex-di">
//         {renderNavSection('right')}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


// 

import React, { useState } from 'react';
import hambarger from '../img/hambarger.png';
import logo from '../img/Youtube logo.png';
import searchIcon from '../img/search.png';
import mic from '../img/mic.png';
import create from '../img/create.png';
import more from '../img/more.png';
import bell from '../img/bell.png';
import userIcon from '../img/Ellipse 4-1.png';
import '../nav.css';

const NavBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { id: 1, src: hambarger, alt: 'Menu Icon', className: 'menu_icon', section: 'left' },
    { id: 2, src: logo, alt: 'YouTube Logo', className: 'logo', section: 'left' },
    { id: 3, src: searchIcon, alt: 'Search Icon', className: 'name', section: 'center' },
    { id: 4, src: mic, alt: 'Mic Icon', className: 'mic_icon', section: 'center' },
    { id: 5, src: create, alt: 'Create Icon', className: '', section: 'right' },
    { id: 6, src: more, alt: 'More Icon', className: '', section: 'right' },
    { id: 7, src: bell, alt: 'Bell Icon', className: '', section: 'right' },
    { id: 8, src: userIcon, alt: 'User Icon', className: 'user_icon', section: 'right' },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    } else {
      alert('Please enter a search term!');
    }
  };

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
        <form className="search-box flex-di" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">
            {renderNavSection('center').filter((_, index) => index === 0)}
          </button>
        </form>
        {renderNavSection('center').filter((_, index) => index === 1)}
      </div>
      <div className="nav_right flex-di">
        {renderNavSection('right')}
      </div>
    </nav>
  );
};

export default NavBar;

