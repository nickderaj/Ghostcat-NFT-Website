import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar.js";
import Sidebar from "../components/Navbar/Sidebar.js";
import Info from "../components/Reusable/Info.js";
import Deck from "../components/Reusable/Deck.js";
import Footer from "../components/Footer/Footer.js";
import Grid from "../components/Reusable/Grid.js";
import List from "../components/Reusable/List.js";
import ToggleList from "../components/Reusable/ToggleList.js";
import {
  aboutInfo,
  mintInfo,
  roadmapList,
  FAQList,
  teamDeck,
  previewGrid,
} from "../components/Reusable/_Data.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const loop = setInterval(() => {
    const images = document.querySelectorAll(".image_bounce");
    const image = images[Math.floor(Math.random() * images.length)];
    image.style.transform = "scale(1)";

    setTimeout(() => {
      image.style.transform = "scale(0.95)";
    }, 800);
  }, 500);

  const clearLoop = () => {
    clearInterval(loop);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Info {...aboutInfo} />
      <Grid {...previewGrid} />
      <Info {...mintInfo} onClick={clearLoop} />
      <List {...roadmapList} />
      <ToggleList {...FAQList} />
      <Deck {...teamDeck} />
      <Footer />
    </>
  );
};

export default Home;
