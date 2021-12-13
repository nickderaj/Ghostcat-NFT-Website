////////// DECK //////////

export const teamDeck = {
  id: "team",
  primary: false,
  topLine: "Our Team",
  heading: "The Ghost Cat Creators",
  subheading:
    "Ghost Cat was created by two brothers with a passion for art, crypto & all things floof",
  buttonLabel: "N/A",
  img_1: require("../../images/team-nick.jpeg").default,
  title_1: "Nick",
  alt_1: "Nick The Cat",
  text_1: "Had too much Catnip, forever taking a nap",
  img_2: require("../../images/team-alex.jpeg").default,
  title_2: "Alex",
  alt_2: "Alex The Cat",
  text_2: "#1 Red Mage on Final Fantasy Online",
};

////////// GRID //////////

export const previewGrid = {
  id: "gallery",
  primary: true,
  img_1: require("../../images/gallery-1.jpeg").default,
  img_2: require("../../images/gallery-2.JPG").default,
  img_3: require("../../images/gallery-3.jpeg").default,
  img_4: require("../../images/gallery-4.jpeg").default,
  img_5: require("../../images/gallery-5.jpeg").default,
  img_6: require("../../images/gallery-6.jpeg").default,
  img_7: require("../../images/gallery-7.jpeg").default,
  img_8: require("../../images/gallery-8.jpeg").default,
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
  imgSmall: true,
  short: true,
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
  buttonLabel: <i>Minting will be available in 2022</i>,
  buttonLink: "/mint",
  imgStart: true,
  img: require("../../images/2-mint.gif").default,
  alt: "Mint",
  noButton: false,
  imgSmall: true,
  btnDisabled: true,
};

////////// LIST //////////

export const roadmapList = {
  id: "roadmap",
  primary: false,
  topLine: "Roadmap",
  heading: "The Long Road Ahead Of Us",
  img: require("../../images/gallery-7.jpeg").default,
  imgStart: false,
  list: [
    {
      title: "1%",
      description: (
        <p>
          Every 100 Ghost Cats adopted, we giveaway <b>1 ETH</b> to a random Cat
          Owner & donate <b>1 ETH</b> to a shelter.
        </p>
      ),
    },
    {
      title: "10%",
      description: (
        <p>
          Giveaway <b>3 ETH</b> & donate <b>3 ETH</b> to a shelter. This will
          continue every 10% of Ghost Cats adopted (1000, 2000, ...)
        </p>
      ),
    },
    {
      title: "25%",
      description: (
        <p>
          Games held for anyone holding a Ghost Cat with <b>big prizes</b>{" "}
          involved.
        </p>
      ),
    },
    {
      title: "50%",
      description: <p>Airdrop 10 Ghost Cats to 10 lucky HODLers.</p>,
    },
    {
      title: "75%",
      description: <p>TBD</p>,
    },
    { title: "90%", description: <p>TBD</p> },
    { title: "100%", description: <p>TBD</p> },
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
          The original 100 (Gen 1) can be found on Hic Et Nunc, on the Tezos
          Blockchain.
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
          With more sales, we'll be able to reach out to more shelters around
          the world.
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
          and more Cats are sold, the % will change automatically on OpenSea.
        </p>
      ),
    },
  ],
  alignLeft: true,
  img: require("../../images/4-faqs.svg").default,
  alt: "FAQs",
  imgSmall: true,
};
