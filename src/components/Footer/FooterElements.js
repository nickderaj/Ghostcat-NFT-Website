import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 4.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 110rem;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15rem;

  @media screen and (max-width: 820px) {
    padding-top: 3.2rem;
    grid-gap: 0rem;
  }

  /* @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  } */
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.6rem;
  text-align: left;
  width: 16rem;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 1rem;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.6rem;
`;

export const FooterText = styled.p`
  font-weight: 700;
  color: #f5dcff;
  margin-bottom: 0rem;
  font-size: 1.7rem;
`;

export const FooterLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 1.7rem;

  &:hover {
    color: #bcf0fb;
    transition: 0.3s ease-out;
  }
`;

export const FooterLinkScroll = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.2rem;
  font-size: 1.7rem;
  cursor: pointer;

  &:hover {
    color: #bcf0fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 100rem;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110rem;
  margin: 4rem auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkR)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 1.6rem;
  margin-left: 9rem;

  @media screen and (max-width: 820px) {
    margin-left: 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 2.4rem;
`;

export const SocialMediaIcon = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 10rem;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.5);
  }
`;
