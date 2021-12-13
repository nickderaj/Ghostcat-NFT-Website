import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { navLinks } from "../Navbar/NavLinks";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterText,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
  SocialMediaIcon,
  FooterLinkScroll,
} from "./FooterElements";

const Footer = () => {
  const openSeaIcon = require("../../images/OpenSea.png").default;
  const twitterIcon = require("../../images/Twitter.png").default;
  const henIcon = require("../../images/HEN.jpeg").default;
  const discordIcon = require("../../images/Discord.png").default;

  const toggleHome = () => {
    scroll.scrollToTop({ duration: 100 });
  };

  const footerScroll = (link) => (
    <FooterLinkScroll key={link.toLowerCase()} to={link.toLowerCase()}>
      {link}
    </FooterLinkScroll>
  );

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkItems>
            <FooterLinkTitle>Menu</FooterLinkTitle>
            {navLinks.map((el) => footerScroll(el))}
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact</FooterLinkTitle>
            <FooterText>Inquiry:</FooterText>
            <FooterLink to="#">nick@ghostcat.xyz</FooterLink>
          </FooterLinkItems>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              GHOST CAT
            </SocialLogo>
            <WebsiteRights>
              Copyright © {new Date().getFullYear()} Ghost Cat. All right
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//twitter.com/GhostCatNFT"
                target="_blank"
                aria-label="Twitter"
              >
                <SocialMediaIcon src={twitterIcon} alt={"Twitter"} />
              </SocialIconLink>
              <SocialIconLink
                href="//discord.gg/BtvMy8AjU7"
                target="_blank"
                aria-label="Discord"
              >
                <SocialMediaIcon src={discordIcon} alt={"Discord"} />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="OpenSea">
                <SocialMediaIcon src={openSeaIcon} alt={"Opensea"} />
              </SocialIconLink>
              <SocialIconLink
                href="//hic.af/ghostcat"
                target="_blank"
                aria-label="Hicetnunc"
              >
                <SocialMediaIcon src={henIcon} alt={"Hicetnunc"} />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
