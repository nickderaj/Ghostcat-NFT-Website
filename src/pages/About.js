import React from 'react';
import Colours from '../styles/Colours';
import '../styles/About.css';

import about from '../images/main/about.png';
import Header from '../components/Header';
import Mint from '../components/Mint';
import TextContainer from '../components/TextContainer';
import ImageContainer from '../components/ImageContainer';
import adoptCat from '../images/main/adoptme.jpg';
import Divider from '../components/Divider';
import Gallery from '../components/Gallery';

const About = () => {
  return (
    <>
      <Header />
      <h1 className="about-header">The Friendly Neighbourhood Ghost Cat</h1>
      <div className="about-wrapper">
        <div className="grid-wrapper">
          <img src={about} alt="Ghost Cat" />
        </div>
        <div className="grid-wrapper">
          <h1 className="about--title" style={{ color: Colours.black }}>
            Ghost Cat... who?
          </h1>
          <p className="about--paragraph" style={{ color: Colours.black }}>
            <span>10,000</span> unique Cats living on the Ethereum Blockchain.
            <br />
            <br />
            <span>40%</span> of sales will be donated to shelter animals & given back to the community.
          </p>
        </div>
      </div>
      <Gallery />
      <Mint />
      <Divider />
      <TextContainer
        title={'Roadmap & Perks'}
        paragraph={
          <p>
            🐾 Every 100 adoptions, we will donate 1 ETH to animal shelters & giveaway 1 ETH to the community - Ghost Cat holders
            are prioritised. <br /> <br />
            🐾 Every 1,000, this is increased to 3ETH donated & given back for a total of 24 ETH per 1,000 adoptions or{' '}
            <b>240 ETH</b> overall! <br /> <br />
            🐾 Games & Competitions will be held on{' '}
            <a href="https://discord.com/invite/BtvMy8AjU7" target="_blank" rel="noreferrer">
              Discord
            </a>{' '}
            +{' '}
            <a href="https://twitter.com/GhostCatNFT" target="_blank" rel="noreferrer">
              Twitter
            </a>{' '}
            with either $$$ or Ghost Cats as prizes, so stay tuned. <br /> <br />
            🐾 Ultimately, we see the cats in an animated series or in a multiplayer game - the decision will be brought to the
            community of Ghost Cat Holders to decide! <br /> <br />
            <span>
              Note: The giveaways will not necessarily happen every 100, we could do 0.2 at 20 cats sold, 0.4 at 60 cats sold and
              the remaining 0.4 at 100 cats sold for example - but every 100 sold we will do a giveaway of 1 ETH in total (or 3
              ETH if we hit the 1,000 mark)!
            </span>
          </p>
        }
      />
      <Divider />
      <ImageContainer
        title={'Our Mission'}
        paragraph={
          <p>
            We will mostly be donating to local shelters in Malaysia, with our first choice being{' '}
            <a href="https://mypetshaven.org/" target="_blank" rel="noreferrer">
              My Pets Haven
            </a>{' '}
            as they really care for the animals, even take them to the beach! <br /> <br /> With more sales, we'll be able to
            reach out to others in need all around the world.
          </p>
        }
        img={adoptCat}
        alt={'Adopt me'}
      />
    </>
  );
};

export default About;
