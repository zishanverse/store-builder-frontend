import * as React from "react";
import {Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {HeaderWrapper, HeaderCont, WelcomeText, HeaderAct, DeliveryInfo, DeliveryText, Divi, TrackOrder, TrackOrderText, Offers,OffersText} from './style';
import {NavWrapper,NavContent, LogoWrapper, LogoIcon, LogoText,NavActions, SearchBar,SearchInput,UserActions,UserActionItem, UserActionText} from './style';
import {CategoryMenuWrapper,Divid, CategoryList, CategoryItem, CategoryLink, CategoryName, CategoryIcon, BannerImage} from './style';
import {Container, HeroSection, HeroContent, HeroImage, HeroTextContainer,HeroTextContent,HeroTextColumn, HeroTextWrapper,HeroSubtitle,HeroTitle, HeroDescription, HeroButton,HeroImageColumn, HeroImageWrapper, HeroImageContent,HeroImageColumnLeft,HeroProductImage, HeroImageColumnRight,HeroImageButton,HeroImageButtonIcon, HeroSpacer,SectionTitle, SectionTitleText,SectionTitleLink, SectionTitleLinkText, SectionTitleLinkIcon,SectionTitleHighlight, SectionDivider,SectionSpacer, ProductSection, ProductList, ProductCard, ProductImageWrapper, ProductImage, ProductDiscount, ProductDetails, ProductName, ProductPricing, ProductPrice, ProductOldPrice, ProductDivider, ProductSavings} from './style';
import {FooterContainer, FooterContent, FooterTop, CompanyInfo, CompanyLogo, ContactUsHeading, ContactInfo, ContactIcon, ContactText, ContactNumber, DownloadApp, FooterLinks, CategoryLinks, PopularCategories, CategoriesHeading, Divider, CategoriesList, ServiceLinks, CustomerServices, ServicesHeading, ServicesList, Copyright} from './style';

const data = [
  {
    id: 1,
    locationText: "Deliver to",
    locationNumber: "423651",
    locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8fa4fcae105a861dedd10220257e4d685fa50f0687553e09dad435ab559ce74?apiKey=1267a3b2841040f2b70bd63147e73b36&",
    trackOrderText: "Track your order",
    trackOrderIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbedcc64f8acef6a267e0e99b1aa5509eac64f2f96ceac56fd5026da12aa6d8d?apiKey=1267a3b2841040f2b70bd63147e73b36&",
    offersText: "All Offers",
    offersIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1dc00d7e4312da5d2c72c5e3830027d9322f139cdc6255133c44253c527a681c?apiKey=1267a3b2841040f2b70bd63147e73b36&",
  },
];

const navCategories = [
    {
      name: "Groceries",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/228e6f8b412651ce85aa2a7c9e4a5702afd7a5e57f38741d4522f6d9c78f254e?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      color: "var(--Primary, #008ecc)",
    },
    {
      name: "Premium Fruits",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe547e8d81ab5f75f6f7107d504079ec7c3cee1699414a65c4c4f7eb7bbb3fff?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      color: "#f3f9fb",
    },
    {
      name: "Home & Kitchen",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe547e8d81ab5f75f6f7107d504079ec7c3cee1699414a65c4c4f7eb7bbb3fff?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      color: "#f3f9fb",
    },
    {
      name: "Fashion",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe547e8d81ab5f75f6f7107d504079ec7c3cee1699414a65c4c4f7eb7bbb3fff?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      color: "#f3f9fb",
    },
    {
      name: "Electronics",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe547e8d81ab5f75f6f7107d504079ec7c3cee1699414a65c4c4f7eb7bbb3fff?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      color: "#f3f9fb",
    },
    {
      name: "Beauty",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe547e8d81ab5f75f6f7107d504079ec7c3cee1699414a65c4c4f7eb7bbb3fff?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      color: "#f3f9fb",
    },
    {
      name: "Home Improvement",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe547e8d81ab5f75f6f7107d504079ec7c3cee1699414a65c4c4f7eb7bbb3fff?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      color: "#f3f9fb",
    },
    {
      name: "Sports, Toys & Luggage",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe547e8d81ab5f75f6f7107d504079ec7c3cee1699414a65c4c4f7eb7bbb3fff?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      color: "#f3f9fb",
    },
];
const products = [
    {
      id: 1,
      name: "Galaxy S22 Ultra",
      price: "₹32999",
      oldPrice: "₹74999",
      save: "₹32999",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbf9d5fe2d70d998b6f4b8dec75331b1bddce96d71970f39a031323301d3de4e?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      discount: "56% OFF",
    },
    {
      id: 2,
      name: "Galaxy M13 (4GB | 64 GB )",
      price: "₹10499",
      oldPrice: "₹14999",
      save: "₹4500",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b95aa3cb9de02eeeb9ad86cfbfca88bf45a90dd73be69411d2ab40becf743538?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      discount: "56% OFF",
    },
    {
      id: 3,
      name: "Galaxy M33 (4GB | 64 GB )",
      price: "₹16999",
      oldPrice: "₹24999",
      save: "₹8000",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1b75d4703b7a5ee7ce01fac8e502a55f00c8ef52795feda660ad63226d2bd93?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      discount: "56% OFF",
    },
    {
      id: 4,
      name: "Galaxy M53 (4GB | 64 GB )",
      price: "₹31999",
      oldPrice: "₹40999",
      save: "₹9000",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcf52a8c33094af863022faa31e23dd585efc7a08ae1ce73d4f4f40e5b3c9e9b?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&",
      discount: "56% OFF",
    },
];

const categories = [
    "Staples",
    "Beverages",
    "Personal Care",
    "Home Care",
    "Baby Care", 
    "Vegetables & Fruits",
    "Snacks & Foods",
    "Dairy & Bakery",
  ];
  
  const customerServices = [
    "About Us",
    "Terms & Conditions", 
    "FAQ",
    "Privacy Policy",
    "E-waste Policy",
    "Cancellation & Return Policy",  
  ];
  
   





const WelcomeCard = () => {
  return (
    <HeaderWrapper>
      <HeaderCont>
        <WelcomeText>Welcome to worldwide Megamart!</WelcomeText>
        <HeaderAct>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <DeliveryInfo>
                <img src={item.locationIcon} alt="Location icon" />
                <DeliveryText>
                  {item.locationText} <strong>{item.locationNumber}</strong>
                </DeliveryText>
              </DeliveryInfo>
              <Divi />
              <TrackOrder>
                <img src={item.trackOrderIcon} alt="Track order icon" />
                <TrackOrderText>{item.trackOrderText}</TrackOrderText>
              </TrackOrder>
              <Divi />
              <Offers>
                <img src={item.offersIcon} alt="Offers icon" />
                <OffersText>{item.offersText}</OffersText>
              </Offers>
            </React.Fragment>
          ))}
        </HeaderAct>
      </HeaderCont>
    </HeaderWrapper>
  );
}


const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#666666"/>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#666666"/>
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#666666"/>
  </svg>
);

const Nav = () => {
  return (
    <NavWrapper>
      <NavContent>
        <LogoWrapper>
          <LogoIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/650d32a77381486b149e96615780c2a5f270d4efbe92050925d935fe72d7c1df?apiKey=1267a3b2841040f2b70bd63147e73b36&" alt="Logo icon" />
          <LogoText src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e1b0cd1d153111b0a0b3e2b5e7b67d2fba427abf2d0169c6414e7ad7feb5ad?apiKey=1267a3b2841040f2b70bd63147e73b36&" alt="Logo text" />
        </LogoWrapper>
        
        <NavActions>
          <SearchBar>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search essentials, groceries and more..." />
          </SearchBar>
          
          <UserActions>
            <UserActionItem>
              <UserIcon />
              <UserActionText>Sign Up/Sign In</UserActionText>
            </UserActionItem>
            
            <UserActionItem>
              <CartIcon />
              <UserActionText>Cart</UserActionText>
            </UserActionItem>
          </UserActions>
        </NavActions>
      </NavContent>
    </NavWrapper>
  );
}









const CategoryMenu = () => {
  return (
    <CategoryMenuWrapper>
      <Divid />
      <CategoryList>
        {navCategories.map((category, index) => (
          <CategoryItem key={index} backgroundColor={category.color}>
            <CategoryLink>
              <CategoryName>{category.name}</CategoryName>
              <CategoryIcon
                src={category.icon}
                alt={`Icon for ${category.name} category`}
              />
            </CategoryLink>
          </CategoryItem>
        ))}
      </CategoryList>
      <BannerImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/c26599aab2ba7c9e00b2df2134c23bab5fed3ccebf4cbd8ed8d3c1f87081faaa?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&" alt="Promotional banner" />
    </CategoryMenuWrapper>
  );
}









const MainComponent =() => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <HeroImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2497ea5ea6eca35756159aceb7f856c311a07a29f81fdb68b3f663a3737a17a?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&" alt="Hero Image" />
          <HeroTextContainer>
            <HeroTextContent>
              <HeroTextColumn>
                <HeroTextWrapper>
                  <HeroSubtitle>
                    Best Deal Online on smart watches
                  </HeroSubtitle>
                  <HeroTitle>SMART WEARABLE.</HeroTitle>
                  <HeroDescription>UP to 80% OFF</HeroDescription>
                  <HeroButton loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a120a2d406340f1de5ce1a287523e27c8479381af7097de86f855dbc734fef4a?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&" alt="Button" />
                </HeroTextWrapper>
              </HeroTextColumn>
              <HeroImageColumn>
                <HeroImageWrapper>
                  <HeroImageContent>
                    <HeroImageColumnLeft>
                      <HeroProductImage
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/317b096c738325f2c3c7b4ebac42a448967f1cc3579a75b71ac0734fe6abc995?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&"
                        alt="Product"
                      />
                    </HeroImageColumnLeft>
                    <HeroImageColumnRight>
                      <HeroImageButton>
                        <HeroImageButtonIcon
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28249ec4d7ab5b8b337d9017d3dfb411cdb43feebdd92e9a9607320c05381717?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&"
                          alt="Button Icon"
                        />
                      </HeroImageButton>
                    </HeroImageColumnRight>
                  </HeroImageContent>
                </HeroImageWrapper>
              </HeroImageColumn>
            </HeroTextContent>
          </HeroTextContainer>
        </HeroContent>
        <HeroSpacer />
      </HeroSection>
      <SectionTitle>
        <SectionTitleText>
          Grab the best deal on{" "}
          <SectionTitleHighlight>Smartphones</SectionTitleHighlight>
        </SectionTitleText>
        <SectionTitleLink>
          <SectionTitleLinkText>View All</SectionTitleLinkText>
          <SectionTitleLinkIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2051de38d02724169611f7f1cd022f3331c9ebad77b0f14f89d88caf58bfebf9?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&"
            alt="Link Icon"
          />
        </SectionTitleLink>
      </SectionTitle>
      <SectionDivider />
      <SectionSpacer />
      <ProductSection>
        <ProductList>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImageWrapper>
                <ProductImage
                  loading="lazy"
                  src={product.image}
                  alt={product.name}
                />
                <ProductDiscount>{product.discount}</ProductDiscount>
              </ProductImageWrapper>
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductPricing>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductOldPrice>{product.oldPrice}</ProductOldPrice>
                </ProductPricing>
                <ProductDivider />
                <ProductSavings>Save - {product.save}</ProductSavings>
              </ProductDetails>
            </ProductCard>
          ))}
        </ProductList>
      </ProductSection>
    </Container>
  );
}











const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <CompanyInfo>
            <CompanyLogo src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1d5dcd5730325de8532fbc7fa6e5d8469c45e890461a017896b7e5940d26eb9?apiKey=1267a3b2841040f2b70bd63147e73b36&" alt="Company Logo" />
            <ContactUsHeading>Contact Us</ContactUsHeading>
            <ContactInfo>
              <ContactIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/375811d6a77e24f1215a6323aff4d87ee45838314098f3e5d39d0eca34e97c27?apiKey=1267a3b2841040f2b70bd63147e73b36&" alt="WhatsApp Icon" />
              <ContactText>Whats App</ContactText>
            </ContactInfo>
            <ContactNumber>+1 202-918-2132</ContactNumber>
            <ContactInfo>
              <ContactIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef33c3c2adec260b865eb77cb90402b8bfce96af90b0f8e21266bb1acabf5a0?apiKey=1267a3b2841040f2b70bd63147e73b36&" alt="Phone Icon" />
              <ContactText>Call Us</ContactText>
            </ContactInfo>
            <ContactNumber>+1 202-918-2132</ContactNumber>
            <DownloadApp>Download App</DownloadApp>
          </CompanyInfo>
          <FooterLinks>
            <CategoryLinks>
              <PopularCategories>
                <CategoriesHeading>
                  <span>Most Popular</span> Categories
                </CategoriesHeading>
                <Divider />
                <CategoriesList>
                  {categories.map((category, index) => (
                    <React.Fragment key={index}>
                      {category}
                      <br />
                    </React.Fragment>
                  ))}
                </CategoriesList>
              </PopularCategories>
            </CategoryLinks>
            <ServiceLinks>
              <CustomerServices>
                <ServicesHeading>Customer Services</ServicesHeading>
                <Divider />
                <ServicesList>
                  {customerServices.map((service, index) => (
                    <React.Fragment key={index}>
                      {service}
                      <br />
                    </React.Fragment>
                  ))}
                </ServicesList>
              </CustomerServices>
            </ServiceLinks>
          </FooterLinks>
        </FooterTop>
        <Divider />
        <Copyright>© 2022 All rights reserved. Reliance Retail Ltd.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

const UserWebsite = () => {
  const jwt = Cookies.get("jwt_token");
  if (jwt === undefined) {
    return <Navigate to="/login" />
  }

  return (
    <>
        <WelcomeCard />
        <Nav />
        <CategoryMenu />
        <MainComponent />
        <Footer />
    </>
)
}



export default UserWebsite;