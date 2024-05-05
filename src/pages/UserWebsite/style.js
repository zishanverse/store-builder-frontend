import styled from "styled-components";



export const HeaderWrapper = styled.header`
  background-color: var(--Backgorund-1, #f5f5f5);
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 14px;
  color: var(--Text, #666);
  font-weight: 400;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const WelcomeText = styled.h1`
  font-family: HK Grotesk, sans-serif;
  font-size: 15px;
`;

export const HeaderAct = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const DeliveryTrackOffer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 18px;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`;

export const DeliveryText = styled.p`
  font-family: HK Grotesk, sans-serif;
`;

export const Divi = styled.div`
  border-color: rgba(217, 217, 217, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #d9d9d9;
  width: 1px;
  height: 18px;
  margin-right: 10px;
  margin-left: 10px;
`;



export const TrackOrderText = styled.p`
  font-family: HK Grotesk, sans-serif;
`;



export const OffersText = styled.p`
  font-family: HK Grotesk, sans-serif;
`;









export const NavWrapper = styled.header`
  background-color: var(--White, #fff);
  z-index: 10;
  display: flex;
  width: 100%;
  align-items: center;
  padding:10px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const NavContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LogoIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

export const LogoText = styled.img`
  width: 138px;
  height: auto;
  object-fit: contain;
  fill: var(--Primary, #008ecc);
`;



export const SearchBar = styled.div`
  border-radius: 10px;
  background-color: var(--Background-3, #f3f9fb);
  display: flex;
  align-items: center;
  width: 40%;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 129%;
  padding: 15px 16px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  font-family: HK Grotesk, sans-serif;
  flex: 1;
  
  &::placeholder {
    color: var(--Text, #666);
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 700;
`;

export const UserActionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const UserActionText = styled.div`
  font-family: HK Grotesk, sans-serif;
`;









export const CategoryMenuWrapper = styled.nav`
  background-color: var(--White, #fff);
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 14px;
  color: var(--Heading, #222);
  font-weight: 500;
  text-align: right;
  line-height: 129%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Divid = styled.div`
  background-color: #ededed;
  min-height: 1px;
  margin-bottom: ${props => props.bottom ? '20px' : '0px'};
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const CategoryList = styled.ul`
  align-self: center;
  display: flex;
  margin-top: 14px;
  gap: 20px;
  padding: 0 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const CategoryItem = styled.li`
  border-radius: 18px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  color: var(--White, #fff);
  white-space: nowrap;
  justify-content: center;
  padding: 9px 14px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const CategoryLink = styled.a`
  display: flex;
  gap: 6px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const CategoryName = styled.span`
  font-family: HK Grotesk, sans-serif;
  color: ${props => props.index !==0 ? '#000' : '#fff'};
`;

export const CategoryIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 18px;
`;

export const BannerImage = styled.img`
  width: 100%;
  border: 1px solid rgba(237, 237, 237, 1);
  margin-top: 15px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;







export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  gap: 0px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const HeroImage = styled.img`
  aspect-ratio: 1;
  width: 86px;
  margin: auto 0;
  z-index: 10;
  left: 100px;
`;

export const HeroTextContainer = styled.div`
  border-radius: 16px;
  background-color: #212844;
  display: flex;
  padding: 20px;
  @media (max-width: 991px) {
    padding: 23px;
  }
`;

export const HeroTextContent = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const HeroTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 62%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: 600;
  line-height: 100%;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const HeroSubtitle = styled.h3`
  font-size: 30px;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

export const HeroTitle = styled.h1`
  margin-top: 32px;
  font-size: 63px;
  font-weight: 700;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

export const HeroDescription = styled.p`
  margin-top: 29px;
  font-size: 30px;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

export const HeroButton = styled.img`
  width: 119px;
  margin-top: 79px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const HeroImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const HeroImageWrapper = styled.div`
  z-index: 10;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const HeroImageContent = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const HeroImageColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 76%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const HeroProductImage = styled.img`
  aspect-ratio: 0.99;
  height: 250px;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const HeroImageColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const HeroImageButton = styled.div`
  border: 8px solid #fff;
  background-color: #f3f9fb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 86px;
  margin: auto;
  position: relative;
  right: ${props => props.left ? '80px' : '0px'};
  left: ${props => props.right ? '80px' : 'none'};
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const HeroImageButtonIcon = styled.img`
  width: 7px;
`;

export const HeroSpacer = styled.div`
  width: 24px;
  height: 24px;
  margin: auto 0;
`;

export const SectionTitle = styled.div`
  display: flex;
  margin-top: 125px;
  width: 100%;
  max-width: 1247px;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

export const SectionTitleText = styled.h2`
  color: #717374;
  flex-grow: 1;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
`;

export const SectionTitleHighlight = styled.span`
  color: #008ecc;
`;

export const SectionTitleLink = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: #222;
  font-weight: 500;
  text-align: right;
  line-height: 112.5%;
`;

export const SectionTitleLinkText = styled.span``;

export const SectionTitleLinkIcon = styled.img`
  width: 18px;
`;

export const SectionDivider = styled.div`
  border-top: 3px solid #008ecc;
  background-color: #008ecc;
  width: 400px;
  max-width: 100%;  
  height: 3px;
  margin-right: auto;
  margin-left: 140px;
  position: relative;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

export const SectionSpacer = styled.div`
  border-top: 1px solid #ededed;
  background-color: #ededed;
  width: 1198px;
  max-width: 100%;
  height: 1px;
`;

export const ProductSection = styled.section`
  width: 986px;
  max-width: 100%;
  margin: 40px 0 20px 40px;
`;

export const ProductList = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const ProductCard = styled.article`
  display: flex;
  background-color: var(--Backgorund-1, #f5f5f5);
  flex-direction: column;
  width: 25%;
  border: 1px solid #f5f5f5; 
  border-radius: 16px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 26px;
  }
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 991px) {
    margin-top: 26px;
  }
`;

export const ProductImage = styled.img`
  aspect-ratio: 0.53;
  width: 84px;
  margin-top: 15px;
`;

export const ProductDiscount = styled.div`
  font-size: 14px;
  color: #fff;
  align-self: flex-start;
  font-weight: 600;
  text-align: center;
  line-height: 16px;
  border-radius: 0px 16px;
  background-color: #008ecc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 0 12px;
`;

export const ProductDetails = styled.div`
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  margin-top: 15px;
  width: 100%;
  flex-direction: column;
  font-size: 16px;
  color: #222;
  line-height: 112.5%;
  padding: 15px 11px;
`;

export const ProductName = styled.h3`
  font-weight: 600;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

export const ProductPricing = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 12px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const ProductPrice = styled.span`
  font-weight: 700;
`;

export const ProductOldPrice = styled.span`
  font-weight: 400;
  text-decoration: line-through;
  flex-grow: 1;
`;

export const ProductDivider = styled.div`
  border-top: 1px solid #ededed;
  background-color: #ededed;
  margin-top: 13px;
  height: 1px;
`;

export const ProductSavings = styled.div`
  color: #249b3e;
  font-weight: 600;
  margin-top: 13px;
`;








export const FooterContainer = styled.footer`
  background-color: var(--Primary, #008ecc);
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  padding: 80px 60px 30px;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  width: 100%;
  gap: 80px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--White, #fff);
  font-weight: 700;
`;

export const CompanyLogo = styled.img`
  width: 217px;
  fill: var(--White, #fff);
  align-self: center;
`;

export const ContactUsHeading = styled.h3`
  margin-top: 36px;
  font: 20px/100% HK Grotesk, sans-serif;
`;

export const ContactInfo = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 11px;
  font-weight: 500;
`;

export const ContactIcon = styled.img`
  width: 24px;
`;

export const ContactText = styled.span`
  font-family: HK Grotesk, sans-serif;
  margin: auto 0;
`;

export const ContactNumber = styled.div`
  font-family: HK Grotesk, sans-serif;
  font-weight: 600;
  align-self: center;
`;

export const DownloadApp = styled.div`
  margin-top: 37px;
  font: 20px/100% HK Grotesk, sans-serif;
`;
  
export const FooterLinks = styled.ul`
  display: flex;
  gap: 80px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const CategoryLinks = styled.div`
  display: flex;
  padding: 0px;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Item = styled.li`
  padding: 0px;
  margin: 0px;
`;

export const PopularCategories = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: var(--White, #fff);

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const CategoriesHeading = styled.h3`
  font: 600 20px/100% HK Grotesk, sans-serif;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 3px solid rgba(255, 255, 255, 1);
  background-color: #fff;
  margin-top: 12px;
  height: 3px;
`;

export const CategoriesList = styled.div`
  margin-top: 32px;
  font: 500 16px/37px HK Grotesk, sans-serif;
`;

export const ServiceLinks = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const CustomerServices = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--White, #fff);

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const ServicesHeading = styled.h3`
  font: 600 20px/100% HK Grotesk, sans-serif;
`;

export const ServicesList = styled.ul`
  margin-top: 32px;
  padding: 0px;
  font: 500 16px/37px HK Grotesk, sans-serif;
`;

export const Copyright = styled.div`
  color: var(--White, #fff);
  align-self: center;
  margin-top: 32px;
  font: 400 20px/100% HK Grotesk, sans-serif;
`;