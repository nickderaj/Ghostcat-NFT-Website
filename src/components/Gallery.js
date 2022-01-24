import React from 'react';
import '../styles/Gallery.css';
import img_1 from '../images/gallery/1.png';
import img_2 from '../images/gallery/2.png';
import img_3 from '../images/gallery/3.png';
import img_4 from '../images/gallery/4.png';
import img_5 from '../images/gallery/5.png';
import img_6 from '../images/gallery/6.png';
import img_7 from '../images/gallery/7.png';
import img_8 from '../images/gallery/8.png';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <img className="gallery-item" src={img_1} alt={'Cat Preview'} />
      <img className="gallery-item" src={img_2} alt={'Cat Preview'} />
      <img className="gallery-item" src={img_3} alt={'Cat Preview'} />
      <img className="gallery-item" src={img_4} alt={'Cat Preview'} />
      <img className="gallery-item" src={img_5} alt={'Cat Preview'} />
      <img className="gallery-item" src={img_6} alt={'Cat Preview'} />
      <img className="gallery-item" src={img_7} alt={'Cat Preview'} />
      <img className="gallery-item" src={img_8} alt={'Cat Preview'} />
    </div>
  );
};

export default Gallery;
