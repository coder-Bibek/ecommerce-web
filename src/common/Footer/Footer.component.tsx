import { FC } from "react";
import styled from "styled-components";
import { GithubIcon, TwitterIcon, YoutubeIcon } from "../../assets/Icons/Icons";
import { Button } from "../Button/Button";

export const Footer: FC = () => {
  let ButtonProps = {
    title1: "+977 9819342206",
    title2: "bidaribibek7gmail.com",
    backgroundColor: "transparent",
    textColor: "white",
  };

  return (
    <FooterWrapper>
      <MiddleContentWrapper>
        <LeftWrapper>
          <section>
            <ContactTitle>Contact us at :</ContactTitle>
            <ButtonWrapper>
              <Button
                title={ButtonProps.title1}
                backgroundColor={ButtonProps.backgroundColor}
                textColor={ButtonProps.textColor}
              ></Button>
            </ButtonWrapper>
          </section>
          <section>
            <ContactTitle>Mail us at :</ContactTitle>
            <ButtonWrapper>
              <Button
                title={ButtonProps.title2}
                backgroundColor={ButtonProps.backgroundColor}
                textColor={ButtonProps.textColor}
              ></Button>
            </ButtonWrapper>
          </section>
        </LeftWrapper>
        <MidWrapper>
          <CopyrightTitle>&copy; Ecommerce FrontEnd</CopyrightTitle>
          <SocialMediaWrapper>
            <SocialMediaTitle>
              <YoutubeIcon></YoutubeIcon>
            </SocialMediaTitle>
            <SocialMediaTitle>
              <TwitterIcon></TwitterIcon>
            </SocialMediaTitle>
            <SocialMediaTitle></SocialMediaTitle>
            <SocialMediaTitle>
              <GithubIcon></GithubIcon>
            </SocialMediaTitle>
          </SocialMediaWrapper>
        </MidWrapper>
        <RightWrapper>
          <ConditionWrapper>
            <TermConditionTitle>About us</TermConditionTitle>
            <TermConditionTitle>Message us</TermConditionTitle>
            <TermConditionTitle>Terms & Conditions</TermConditionTitle>
            <MeetTitle>Let's Meet</MeetTitle>
            <SellerWrapper>
              <SellerTitle>Be a Seller</SellerTitle>
            </SellerWrapper>
          </ConditionWrapper>
          <ConditionWrapper>
            <TermConditionTitle>Help</TermConditionTitle>
            <TermConditionTitle>Report a Bug</TermConditionTitle>
          </ConditionWrapper>
        </RightWrapper>
      </MiddleContentWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #800020;
  padding: 1rem;
`;

const MiddleContentWrapper = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LeftWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const MidWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  justify-content: space-between;
`;

const RightWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContactTitle = styled.strong`
  font-size: 0.9rem;
`;
const CopyrightTitle = styled.strong`
  font-size: 0.9rem;
`;
const TermConditionTitle = styled.strong`
  font-size: 0.6rem;
  margin-bottom: 0.3rem;
`;
const ButtonWrapper = styled.section`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
const ConditionWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
const SocialMediaWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SocialMediaTitle = styled.strong`
  font-size: 0.8rem;
  margin-left: 0.2rem;
  margin-top: 0.3rem;
`;
const MeetTitle = styled.strong`
  font-size: 0.6rem;
  margin-bottom: 0.3rem;
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;
const SellerTitle = styled.strong`
  font-size: 0.7rem;
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;

const SellerWrapper = styled.section``;
