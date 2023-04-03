import './Sidebar.css';
import React, {useState} from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>
          &times;
        </button>
        <h2>Dropplet</h2>
        <p>An app for nurture</p>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Downloads</a></li>
          <li><a href="#">Dashboard</a></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;