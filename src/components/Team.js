import React from 'react';
import '../styles/Team.css';
import nick from '../images/team/nick.png';
import alex from '../images/team/alex.png';

const Team = () => {
  return (
    <>
      <h2 className="team-title">The Team</h2>
      <div className="team-subheading">
        <p>
          Ghost Cat was created by two brothers with an interest in crypto, NFTs and all things floof. Come chat with us on{' '}
          <a href="https://discord.gg/BtvMy8AjU7">Discord!</a>
        </p>
      </div>
      <div className="team-grid">
        <div className="team-item">
          <img src={nick} alt="Nick" className="team-image" />
          <div className="team-para">
            <h4>Nick</h4>
            <p>Wrote the code - probably taking a nap right now</p>
          </div>
        </div>
        <div className="team-item">
          <img src={alex} alt="Alex" className="team-image" />
          <div className="team-para">
            <h4>Alex</h4>
            <p>Artist by day, #1 Red Mage on FFXIV by night</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
