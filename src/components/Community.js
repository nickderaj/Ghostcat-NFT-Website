import React from 'react';
import '../styles/Community.css';
import catopic from '../images/featured/catopic.jpeg';
import clipclop from '../images/featured/clipclop.png';
import budgie from '../images/featured/budgie.png';
import cupcup from '../images/featured/cupcup.gif';
import goat from '../images/featured/goat.gif';
import mage from '../images/featured/mage.png';
import slime from '../images/featured/slime.png';
import tato from '../images/featured/tato.png';
import heitz from '../images/featured/Heitz.jpeg';
import original from '../images/OG.gif';

const Community = () => {
  const image = (src, alt, url) => {
    return (
      <div className="collab-image-wrapper">
        <a href={url}>
          <img alt={alt} src={src} className="collab-image" />
        </a>
      </div>
    );
  };
  return (
    <div style={{ backgroundColor: '#f7f8fa' }}>
      <div style={{ padding: '2rem 0' }}>
        <h2 className="community-title">Ghost Cat Community</h2>
        <p className="community-paragraph">
          Since launching in September 2021, the Ghost Cat Community has grown rapidly with games held on Discord,
          artist collabs & just generally cool cats.
        </p>
        <div className="community-wrapper">
          <div className="community-left">
            <div className="poster-container">
              <img src={heitz} alt="Heitz Studio Ghost Cat" className="community-poster" />
            </div>
            <p className="poster-text">
              Now on display in <a href="https://twitter.com/HeitzStudio/status/1482057316396679171">Heitz Studio</a>:
              “Zombie Cat”
            </p>
          </div>
          <div className="community-right">
            <div className="collab-wrapper">
              {image(cupcup, 'Cup Cup', 'https://objkt.com/asset/hicetnunc/639669')}
              {image(clipclop, 'Sir Clip Clop', 'https://objkt.com/asset/hicetnunc/442862')}
              {image(mage, 'Heitz Studio', 'https://objkt.com/asset/hicetnunc/636712')}
            </div>
            <div className="collab-wrapper">
              {image(catopic, 'Nitin', 'https://objkt.com/asset/hicetnunc/631817')}
              {image(original, 'Ghost Cat', 'https://objkt.com/asset/hicetnunc/340891')}
              {image(budgie, 'Budgie', 'https://objkt.com/asset/hicetnunc/399464')}
            </div>
            <div className="collab-wrapper">
              {image(slime, 'Crazy Slimes', 'https://objkt.com/asset/hicetnunc/417240')}
              {image(goat, 'Crypto Goats', 'https://objkt.com/asset/hicetnunc/394292')}
              {image(tato, 'TezTato', 'https://objkt.com/asset/hicetnunc/415693')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
