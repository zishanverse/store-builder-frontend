import * as React from "react";
import Cookies from "js-cookie";
import {Navigate, Link} from 'react-router-dom';
import {PricingSection, Header, Logo, Title, Heading, Subheading, PricingGrid, PricingColumn, PricingCard, PlanTitle, PricingDetails, PriceWrapper, PriceDetails, Price, PricePeriod, PopularTag, ChoosePlanButton} from './style'

const pricingPlans = [
  {
    title: "For new business testers",
    price: "₹0",
    period: "/lifetime",
    isPopular: true,
    buttonText: "CHOOSE THIS PLAN",
  },
  {
    title: "For new business testers",
    price: "₹0",
    period: "/lifetime",
    isPopular: true,
    buttonText: "CHOOSE THIS PLAN",
  },
  {
    title: "For new business testers",
    price: "₹0",
    period: "/lifetime",
    isPopular: false,
    buttonText: "CHOOSE THIS PLAN",
  },
  {
    title: "For new business testers",
    price: "₹0",
    period: "/lifetime",
    isPopular: false,
    buttonText: "CHOOSE THIS PLAN",
  },
];

const Plans = () => {
  const jwt = Cookies.get("jwt_token");
  
  if (jwt === undefined) {
    return <Navigate to="/login"/>
  }
  else {
    return (
      <PricingSection>
        <Header>
          <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/918e5c02da0ba7c3956fdd75c2c443867164831935e15662388f4afcc2188d34?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&" alt="StoreBuilder Logo" />
          <Title>StoreBuilder</Title>
        </Header>
        <Heading>Select a pricing plan</Heading>
        <Subheading>
          Please select a plan to finish the setup and purchase
        </Subheading>
        <PricingGrid>
          {pricingPlans.map((plan, index) => (
            <PricingColumn key={index}>
              <PricingCard>
                <PlanTitle>{plan.title}</PlanTitle>
                <PricingDetails>
                  <PriceWrapper>
                    <PriceDetails>
                      <Price>{plan.price}</Price>
                      <PricePeriod>{plan.period}</PricePeriod>
                    </PriceDetails>
                    {plan.isPopular && <PopularTag>Popular</PopularTag>}
                  </PriceWrapper>
                  <Link to="/"><ChoosePlanButton>{plan.buttonText}</ChoosePlanButton></Link>
                </PricingDetails>
              </PricingCard>
            </PricingColumn>
          ))}
        </PricingGrid>
      </PricingSection>
    );
  }

  
}



export default Plans;