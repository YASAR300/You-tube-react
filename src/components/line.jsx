import React from 'react';
import '../line.css';

const Menu = ({ onMenuClick }) => { // Receive the handler function as prop
  const menuItems = [
    { label: 'All', className: 'all', width: '50px', customStyles: { backgroundColor: 'white', color: 'black' } },
    { label: 'Coke studio', className: 'coke' },
    { label: 'ux', className: 'ux', width: '40px' },
    { label: 'Case Study', className: 'case' },
    { label: 'Music', className: 'music', width: '70px' },
    { label: 'Bangla Lofi', className: 'ba' },
    { label: 'Tour', className: 'tour', width: '50px' },
    { label: 'Saintmartin', className: 'sa' },
    { label: 'Tech', className: 'tech', width: '50px' },
    { label: 'iPhone 13', className: 'i' },
    { label: 'User Interface Design', className: 'uid', width: '200px' },
    { label: 'Computer' }
  ];

  const handleClick = (label) => {
    onMenuClick(label); 
  };

  return (
    <div className="menu-line">
      {menuItems.map((item, index) => (
        <p 
          key={index}
          className={item.className}
          style={item.customStyles || {}}
          onClick={() => handleClick(item.label)} 
        >
          {item.label}
        </p>
      ))}
    </div>
  );
};

export default Menu;
