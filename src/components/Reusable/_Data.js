////////// DECK //////////

export const teamDeck = {
  id: "team",
  primary: false,
  topLine: "Our Team",
  heading: "The Ghost Cat Creators",
  subheading:
    "Ghost Cat was created by two brothers with a passion for art, crypto & all things floof",
  buttonLabel: "N/A",
  img_1: require("../../images/team-nick.png").default,
  title_1: "Nick",
  alt_1: "Nick The Cat",
  text_1: "Had too much Catnip, forever taking a nap",
  img_2: require("../../images/team-alex.png").default,
  title_2: "Alex",
  alt_2: "Alex The Cat",
  text_2: "#1 Red Mage on Final Fantasy Online",
};

////////// GRID //////////

export const previewGrid = {
  id: "gallery",
  primary: true,
  img_1: require("../../images/gallery-1.png").default,
  img_2: require("../../images/gallery-2.png").default,
  img_3: require("../../images/gallery-3.png").default,
  img_4: require("../../images/gallery-4.png").default,
  img_5: require("../../images/gallery-5.png").default,
  img_6: require("../../images/gallery-6.png").default,
  img_7: require("../../images/gallery-7.png").default,
  img_8: require("../../images/gallery-8.png").default,
};

////////// INFO //////////

export const aboutInfo = {
  id: "about",
  primary: false,
  topLine: "",
  heading: "The Friendly Neighbourhood Ghost Cat",
  description: (
    <p>
      Ghost Cats are <b>10,000</b> randomly-generated unique NFTs living on the
      Ethereum Blockchain. Our mission is to build an NFT Community and help
      lost animals find a home.
      <br />
      <br />
      <span style={{ color: "#bcf0fb", fontWeight: 800 }}>
        20% of profits
      </span>{" "}
      from primary sales will be donated to animal shelters & others causes, and
      given back to the community (you guys!) as certain milestones are met.
    </p>
  ),
  buttonLabel: "Get Started",
  buttonLink: "mint",
  noButton: true,
  imgStart: false,
  img: require("../../images/1-about.jpeg").default,
  alt: "Ghost Cat Preview",
  imgBorder: true,
  short: false,
  hero: true,
};
export const mintInfo = {
  id: "mint",
  primary: true,
  topLine: "Mint",
  heading: "Adopt a Ghost Cat Today",
  description: (
    <p>
      Connect your ETH wallet and adopt your very own randomly generated Ghost
      Cat. Every cat is unique and some much rarer than others, but all equally
      cute!
      <br />
      <br />
      Signing the adoption papers will be <b>0.06 ETH</b> furever!
    </p>
  ),
  buttonLabel: <i>Minting will be available soon</i>,
  buttonLink: "/mint",
  imgStart: true,
  img: require("../../images/2-mint.gif").default,
  alt: "Mint",
  noButton: false,
  imgSmall: true,
  imgBorder: true,
  btnDisabled: true,
};
export const gen1Info = {
  id: "gen 1",
  primary: true,
  topLine: "Gen 1",
  heading: "We haven't forgotten the OGs",
  description: (
    <p>
      Holders of the{" "}
      <a
        href="https://hic.af/ghostcat"
        style={{ color: "#66bcd7", textDecoration: "none" }}
      >
        Original 100
      </a>{" "}
      will receive exclusive rewards as we reach certain milestones in Gen 2.
      <br />
      <br />
      We plan to make interactions between Gen 1 & Gen 2 possible when we
      release our Ghost Cat World, so don't forget about these guys!
    </p>
  ),
  buttonLabel: <i>Minting will be available soon</i>,
  buttonLink: "/",
  imgStart: true,
  img: require("../../images/OG Cat.gif").default,
  alt: "Mint",
  noButton: true,
  imgSmall: true,
  imgBorder: true,
  btnDisabled: true,
};
////////// LIST //////////

export const roadmapList = {
  id: "roadmap",
  primary: false,
  topLine: "Roadmap",
  heading: "The Long Road Ahead Of Us",
  img: require("../../images/gallery-7.png").default,
  imgStart: false,
  list: [
    {
      title: "⦾",
      description: (
        <p>
          Every 100 Ghost Cats adopted, we giveaway <b>1 ETH</b> to a random Cat
          Owner & donate <b>1 ETH</b> to a shelter, and every 1000 this bumps up
          to <b>3 ETH.</b>
        </p>
      ),
    },
    {
      title: "⦾",
      description: (
        <p>
          Games: Held for anyone holding a Ghost Cat with <b>big prizes</b>{" "}
          involved.
        </p>
      ),
    },
    {
      title: "⦾",
      description: (
        <p>Airdrops: Will occur continuously - stay tuned on Discord!</p>
      ),
    },
    {
      title: "⦾",
      description: (
        <p>Cat Scratch Post: for Ghost Cat holders to create masterpieces.</p>
      ),
    },
    {
      title: "⦾",
      description: (
        <p>
          Ultimately you'll be able to look after your adopted Ghost Cats -
          feed, groom, explore (think Neopets) with them in a multiplayer world.
          After the project is released we will begin working on this ASAP!
        </p>
      ),
    },
  ],
};

////////// TOGGLE LIST //////////

export const FAQList = {
  id: "faqs",
  primary: true,
  topLine: "FAQS",
  heading: "Frequently Asked Questions",
  dropdowns: [
    {
      title: <p>Where can I buy Ghost Cats?</p>,
      description: (
        <p>
          The latest Ghost Cats will be available to mint on this website once
          you've linked your Metamask wallet. They will be hosted on OpenSea, on
          the Ethereum Blockchain and will <b>always</b> be 0.06ETH each to
          mint.
          <br />
          <br />
          The original 100 (Gen 1) can be found on the{" "}
          <a
            href="https://hic.af/ghostcat"
            style={{ color: "#66bcd7", textDecoration: "none" }}
          >
            Tezos Blockchain
          </a>
          .
        </p>
      ),
    },
    {
      title: <p>Which Shelter will we donate to?</p>,
      description: (
        <p>
          We will mostly be donating to local shelters, in Malaysia, with our
          first choice being{" "}
          <a
            href="https://mypetshaven.org"
            style={{ color: "#66bcd7", textDecoration: "none" }}
          >
            My Pets Haven
          </a>{" "}
          as they really care for the animals, even take them for trips to the
          beach!
          <br />
          <br />
          With more sales, we'll be able to reach out to more shelters and
          others in need all around the world.
        </p>
      ),
    },
    {
      title: <p>How is rarity calculated?</p>,
      description: (
        <p>
          We didn't want to make some attributes far rarer than others, as it
          comes down to preference at the end of the day. With that in mind, we
          threw all possibilities into the mix and randomly released 10,000 of
          them.
          <br />
          <br />
          This will cause some attributes to be rarer than others, and as more
          and more Cats are sold, the % will change automatically, however we
          suggest you just buy the ones you like and have fun!
        </p>
      ),
    },
    {
      title: <p>How will the Airdrops work?</p>,
      description: (
        <p>
          Periodically we'll release Ghost Cats to members in the community.
          Some examples are giveaways to current holders, most invites on
          Discord, playing games with the community and more.
          <br />
          <br /> Join the{" "}
          <a
            href="http://discord.gg/BtvMy8AjU7"
            style={{ color: "#66bcd7", textDecoration: "none" }}
          >
            Discord
          </a>{" "}
          channel and look out for any announcements!
        </p>
      ),
    },
  ],
  alignLeft: true,
  alt: "FAQs",
  imgSmall: true,
  imgBorder: true,
};
