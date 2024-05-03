import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
`;






export const AppContainer = styled.div`
  background-color: rgba(236, 236, 236, 0.29);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 70px 8px 18px;
`;

export const Header = styled.header`
  background-color: #fff;
  border-radius: 3px;
  color: #444;
  display: flex;
  font-weight: 700;
  gap: 10px;
  padding: 3px 0;
`;

export const ProfileImage = styled.img`
  aspect-ratio: 1.11;
  object-fit: cover;
  width: 21px;
`;

export const ProfileName = styled.span`
  font-family: Karla, sans-serif;
  margin: auto 0;
`;

export const MenuContainer = styled.nav`
  background-color: #fff;
  border-radius: 3px;
  color: #000;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  margin-top: 525px;
  padding: 6px 0;
  width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin: 0 11px 0 12px;
  cursor: pointer;
  @media (max-width: 991px) {
    margin: 0 10px;
  }
`;

export const MenuTitle = styled.span`
  font-family: Alata, sans-serif;
`;

export const MenuIcon = styled.img`
  aspect-ratio: 0.96;
  object-fit: contain;
  width: 23px;
`;

export const Divider = styled.hr`
  align-self: center;
  aspect-ratio: 100;
  border-color: rgba(0, 0, 0, 0.25);
  border-style: solid;
  border-width: 1px;
  margin-top: 4px;
  object-fit: cover;
  stroke: rgba(0, 0, 0, 0.25);
  stroke-width: 1px;
  width: 184px;
`;













export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: fit-content;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Wrapper = styled.div`
  align-self: center;
  width: 100%;
  max-width: 1186px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 74%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

export const IntroText = styled.p`
  color: #000;
  font: 500 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StoreSetupSection = styled.section`
  border-radius: 8px;
  background-color: #fafafa;
  display: flex;
  margin-top: 35px;
  flex-direction: column;
  font-weight: 400;
  padding: 27px 0 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StoreSetupHeader = styled.header`
  display: flex;
  margin-left: 33px;
  width: 515px;
  max-width: 100%;
  flex-direction: column;
  color: #000;
`;

export const StoreSetupTitle = styled.h2`
  font: 500 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StoreSetupDescription = styled.p`
  color: rgba(0, 0, 0, 0.86);
  margin-top: 9px;
  font: 12px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StoreSetupProgress = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(128, 128, 128, 0.2);
  background-color: #fafafa;
  align-self: start;
  margin-top: 10px;
  padding: 6px 22px;
  font: 10px Poppins, sans-serif;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const StoreSetupSteps = styled.div`
  border-radius: 0 0 7px 7px;
  border: 1px solid rgba(69, 69, 69, 0.25);
  background-color: rgba(0, 0, 0, 0.89);
  display: flex;
  margin-top: 23px;
  flex-direction: column;
  align-items: start;
  padding: 30px 42px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const StoreSetupStep = styled.div`
  display: flex;
  gap: 18px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const StepIcon = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  color: #000;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const StepImage = styled.img`
  aspect-ratio: 1.19;
  object-fit: auto;
  object-position: center;
  width: 32px;
  align-self: center;
`;

export const StepDivider = styled.div`
  border: 1px solid #c9c9c9;
  background-color: #c9c9c9;
  margin-top: 7px;
  height: 41px;
`;

export const StepNumber = styled.div`
  font-family: Alata, sans-serif;
  background-color: #fff;
  border-radius: 50%;
  margin-top: 10px;
  justify-content: center;
  padding: 8px 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const StepDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #fff;
  flex-grow: 1;
  width: fit-content;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StepTitle = styled.h3`
  font-family: Alata, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StepDescription = styled.p`
  color: #cfcfcf;
  margin-top: 6px;
  font: 12px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const MoreInfoButton = styled.button`
  border-radius: 3px;
  border: 1px solid rgba(128, 128, 128, 0.2);
  background-color: #fafafa;
  align-self: start;
  margin-top: 10px;
  color: #000;
  padding: 6px 19px;
  font: 11px Alata, sans-serif;
`;

export const NextStepTitle = styled.h4`
  font-family: Alata, sans-serif;
  margin-top: 21px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const NextStepDescription = styled.p`
  color: #cfcfcf;
  margin-top: 6px;
  font: 12px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StepButton = styled.div`
  display: flex;
  margin-left: 13px;
  gap: 20px;
  font-size: 11px;
  color: #000;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

export const StepButtonText = styled.div`
  font-family: Alata, sans-serif;
  border-radius: 3px;
  border: 1px solid rgba(128, 128, 128, 0.2);
  background-color: #fafafa;
  justify-content: center;
  margin: auto 0;
  padding: 4px 12px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 26%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const StoreDetailsSection = styled.section`
  display: flex;
  margin-top: 322px;
  flex-direction: column;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const StoreLink = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(57, 57, 57, 0.2);
  background-color: #fdfdfd;
  display: flex;
  padding-left: 13px;
  gap: 20px;
  justify-content: space-between;
`;

export const StoreLinkDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin: auto 0;
`;

export const StoreLinkLabel = styled.span`
  color: #000;
  font-family: Alata, sans-serif;
`;

export const StoreLinkUrl = styled.span`
  color: #1400ff;
  font-family: Alata, sans-serif;
  margin-top: 12px;
`;

export const VisitWebsiteButton = styled.button`
  border-radius: 0 5px 5px 0;
  background-color: rgba(0, 0, 0, 0.89);
  color: #fff;
  padding: 21px 16px;
  font: 12px Alata, sans-serif;
  cursor: pointer;
`;

export const KycSection = styled.section`
  border-radius: 4px;
  background-color: #ffe3ac;
  display: flex;
  margin-top: 29px;
  width: 100%;
  flex-direction: column;
  font-size: 15px;
  padding: 13px;
`;

export const KycHeader = styled.header`
  display: flex;
  gap: 6px;
  color: #000;
`;

export const KycIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 22px;
`;

export const KycTitle = styled.h3`
  font-family: Alata, sans-serif;
  flex-grow: 1;
  margin: auto 0;
`;

export const KycDescription = styled.p`
  color: rgba(38, 38, 38, 0.8);
  margin-top: 9px;
  font: 12px Alata, sans-serif;
`;

export const StartVerificationButton = styled.button`
  font-family: Alata, sans-serif;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.89);
  align-self: end;
  margin-top: 15px;
  color: #fff;
  padding: 11px 22px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid rgba(221, 221, 221, 0.3);
  background-color: rgba(236, 236, 236, 0.29);
  margin-top: 25px;
  align-self: center;
`;