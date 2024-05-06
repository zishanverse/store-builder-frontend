import styled from "styled-components";


export const PricingSection = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 18px 41px 80px;

  @media (max-width: 991px) {
    padding: 10px 20px 41px;
  }
`;

export const Header = styled.header`
  align-self: flex-end;
  display: flex;
  gap: 7px;
  font-size: 19px;
  color: #000;
  font-weight: 700;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 28px;
`;

export const Title = styled.h1`
  font-family: Inria Sans, sans-serif;
  font-style: italic;
  margin: auto 0;
`;

export const Heading = styled.h2`
  color: #000;
  margin-top: 27px;
  font: 600 24px Poppins, sans-serif;
`;

export const Subheading = styled.p`
  color: #565656;
  font: 500 14px Poppins, sans-serif;
`;

export const PricingGrid = styled.div`
  margin-top: 52px;
  width: 100%;
  max-width: 1294px;
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    margin-top: 40px;
    max-width: 100%;
    padding-right: 0;
  }
`;

export const PricingColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const PlanTitle = styled.h3`
  border-radius: 8px 9px 6px 6px;
  border: 1px solid rgba(215, 215, 215, 1);
  background-color: #000;
  color: #fff;
  text-align: center;
  letter-spacing: 0.74px;
  padding: 12px 39px 33px;
  font: 400 19px/128% Abel, sans-serif;

  @media (max-width: 991px) {
    padding: 12px 20px 33px;
  }
`;

export const PricingDetails = styled.div`
  border-radius: 8px;
  box-shadow: 0px 4.5px 8px 3.7px rgba(234, 234, 234, 0.91);
  border: 1px solid rgba(193, 193, 193, 0.63);
  background-color: #fff;
  display: flex;
  width: 100%;
  padding-top: 22px;
  flex-direction: column;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 21px;

  @media (max-width: 991px) {
    margin: 0 10px;
  }
`;

export const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.span`
  color: rgba(0, 0, 0, 0.67);
  font: 500 24px Poppins, sans-serif;
`;

export const PricePeriod = styled.span`
  color: #646464;
  margin-top: 24px;
  font: 700 32px Inria Sans, sans-serif;
`;

export const PopularTag = styled.div`
  border-radius: 6px;
  background-color: #ffc633;
  color: #000;
  white-space: nowrap;
  justify-content: center;
  padding: 4px 23px;
  font: 700 13px Inria Sans, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 4px 20px;
  }
`;

export const ChoosePlanButton = styled.button`
  font-feature-settings: "clig" off, "liga" off;
  border-radius: 0 0 6px 6px;
  border: 1px solid rgba(215, 215, 215, 1);
  background-color: #000;
  margin-top: 328px;
  align-items: center;
  color: #fff;
  letter-spacing: 0.13px;
  justify-content: center;
  padding: 20px 60px;
  width: 100%;
  font: 500 13px/100% Poppins, sans-serif;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 20px;
  }
`;