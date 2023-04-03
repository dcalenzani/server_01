import React from 'react';
import "./Gallery.css"
import betty from "./images/bettyholberton.jpg"

const Gallery = () => {
  return (
    <div className="gallery">
      <div className='container'>
        <div className='card'>
          <img src={betty} alt="Betty Holberton" />;
          <div className='intro'>
            <h1>Betty Holberton</h1>
            <p> She was one of the 6 scientists involved in the development of the first multipurpose computers.</p>
          </div>
        </div>
        <div className='card'>
          <img src={betty} alt="Betty Holberton" />;
          <div className='intro'>
            <h1>Betty Holberton</h1>
            <p> She was one of the 6 scientists involved in the development of the first multipurpose computers.</p>
          </div>
        </div>
        <div className='card'>
          <img src={betty} alt="Betty Holberton" />;
          <div className='intro'>
            <h1>Betty Holberton</h1>
            <p> She was one of the 6 scientists involved in the development of the first multipurpose computers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
