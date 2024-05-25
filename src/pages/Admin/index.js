import Cookies from "js-cookie";
import { Navigate,Link, useNavigate } from "react-router-dom";
import {AdminContainer,AppContainer, Header,ProfileImage,ProfileName,MenuContainer,MenuItem,MenuTitle,MenuIcon,  Container, Wrapper, MainContent, LeftColumn, IntroSection, IntroText, StoreSetupSection,StoreSetupHeader, StoreSetupTitle, StoreSetupDescription,StoreSetupProgress,StoreSetupSteps, StoreSetupStep,StepIcon,  StepImage, StepDivider, StepNumber ,StepDetails, StepTitle, StepDescription, StepButton, RightColumn, StoreDetailsSection, StoreLink, StoreLinkDetails, StoreLinkLabel, StoreLinkUrl,VisitWebsiteButton,KycSection,KycHeader, KycIcon,KycTitle,KycDescription,StartVerificationButton,Footer  } from './style';

const storeSetupData = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bae7e60e0296c340729f506d17dd20b80d83cc11556915db2233faee409b2c5d?apiKey=8bb72d5bc354495492eeb050b15297da&",
    title: "Name your store website",
    description: "Congratulation's, you just completed the store name step",
    buttonText: "More info",
    
  },
  {
    id: 2,
    title: "Add your first product to your online store",
    description:"add product, description and price and start selling now to your online store",
    buttonText: "Add product",
  },
  {
    id: 3,
    title: "Add bank details or UPI ID on payment section",
    description:
      "Add UPI ID or Bank details or Aggrigator Api to accept payments from your online store",
    buttonText: "Payments",
  },
  
  {
    id: 4,
    title: "Customize your store theme",
    description:
      "Customize header, footer, menu, themes, templates and many more in theme setting page",
    buttonText: "Themes",
  },
];



const SideBar = () => {
  
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("jwt_token");
    Cookies.remove("user_site_id");
    navigate("/login");
  }
  return (
    <AppContainer>
      <Header>
        <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a4cdc810b6efec1b8e32058d3ff55b1d663c2ed3f47cdc074ac56b76837dd1?apiKey=8bb72d5bc354495492eeb050b15297da&" alt="Profile" />
        <ProfileName>DsTest</ProfileName>
      </Header>
      <MenuContainer>
          <MenuItem >
            <MenuTitle>Subscription</MenuTitle>
            <MenuIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/be1aa3543c2d9fbe53ee5a94530599e915b8effb09d172ed77c3b955c6d448c6?apiKey=8bb72d5bc354495492eeb050b15297da&" alt="Subscription" />
          </MenuItem>
          
          <MenuItem onClick={logout}>
            <MenuTitle>Logout</MenuTitle>
            <MenuIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/9677a1a0a674d87f8fe8552cf6ae7d04ad9c47d89902933098765efc705905f6?apiKey=8bb72d5bc354495492eeb050b15297da&" alt="logout" />
          </MenuItem>
          
        
      </MenuContainer>
    </AppContainer>
  );
}

const Admin = () => {
  const id = Cookies.get("site_name");
  const jwt = Cookies.get("jwt_token");
  if (jwt === undefined) {
    return <Navigate to="/login"/>
  }
  return (
    <AdminContainer>
      <SideBar />
    <Container>
      <Wrapper>
        <MainContent>
          <LeftColumn>
            <IntroSection>
              <IntroText>
                Thank's for choosing Shopifly to create and grow with your
                business.....
              </IntroText>
              <StoreSetupSection>
                <StoreSetupHeader>
                  <StoreSetupTitle>Complete Store Setup</StoreSetupTitle>
                  <StoreSetupDescription>
                    Ai setup guide that can help you to setup your own store
                    with personalized suggestion
                  </StoreSetupDescription>
                  <StoreSetupProgress>1/4 completed</StoreSetupProgress>
                </StoreSetupHeader>
                <StoreSetupSteps>
                  {storeSetupData.map((step) => (
                    <StoreSetupStep key={step.id}>
                      <StepIcon>
                        {step.icon ? <StepImage src={step.icon} /> : <StepNumber>{step.id}</StepNumber>}
                        <StepDivider />
                        
                      </StepIcon>
                      <StepDetails>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                          <StepButton>{step.buttonText}</StepButton>
                        
                      </StepDetails>
                      
                    </StoreSetupStep>
                  ))}
                </StoreSetupSteps>
              </StoreSetupSection>
            </IntroSection>
          </LeftColumn>
          <RightColumn>
            <StoreDetailsSection>
              <StoreLink>
                <StoreLinkDetails>
                  <StoreLinkLabel>Store Link</StoreLinkLabel>
                  <StoreLinkUrl>https://shopifly.in/fore</StoreLinkUrl>
                </StoreLinkDetails>
                <Link to={`/user/${id}`}  > <VisitWebsiteButton >Visit Your website</VisitWebsiteButton></Link>
              </StoreLink>
              <KycSection>
                <KycHeader>
                  <KycIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/58064d34e4e56d1d728511b4550aeda66ef816377091e64737c3a582ec62761a?apiKey=8bb72d5bc354495492eeb050b15297da&" />
                  <KycTitle>KYC Submit</KycTitle>
                </KycHeader>
                <KycDescription>
                  To get payout and go with flawless response complete your KYC
                  with Shopifly
                </KycDescription>
                <StartVerificationButton>
                  start verification
                </StartVerificationButton>
              </KycSection>
            </StoreDetailsSection>
          </RightColumn>
        </MainContent>
      </Wrapper>
      <Footer>Footer @Shopifly- 2024</Footer>
    </Container>
    </AdminContainer>
  );
};

export default Admin;









