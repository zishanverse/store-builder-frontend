import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 61%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  aspect-ratio: 1.03;
  object-fit: cover;
  object-position: center;
  width: 100%;
  margin-top: 9px;
  flex-grow: 1;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 39%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 9px;
  font-size: 24px;
  color: #000;
  font-weight: 700;
  white-space: nowrap;
  align-self: flex-end;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 35px;
`;

export const Title = styled.h1`
  font-family: Inria Sans, sans-serif;
  font-style: italic;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

export const Heading = styled.h2`
  color: rgba(6, 6, 6, 0.8);
  margin-top: 117px;
  font: 600 32px Poppins, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Subheading = styled.p`
  color: rgba(57, 57, 57, 0.86);
  font-family: Poppins, sans-serif;
  font-weight: 600;
  margin-top: 5px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Label = styled.label`
  color: var(--Primary-text, #0c1421);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.16px;
  margin-top: ${props => props.marginTop || "37px"};

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Input = styled.input`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto, sans-serif;
  border-radius: 12px;
  border: 1px solid rgba(210, 210, 210, 1);
  background-color: #f7fbff;
  margin-top: 8px;
  color: #8897ad;
  letter-spacing: 0.16px;
  padding: 16px 15px;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }

  &::placeholder {
    color: #8897ad;
  }
`;

export const Button = styled.button`
  font-feature-settings: "clig" off, "liga" off;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #000;
  margin-top: 54px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2px;
  padding: 12px 60px;
  font: 20px Roboto, sans-serif;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 12px 20px;
  }
`;

export const SignUpLink = styled.p`
  
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.18px;
  margin-top: 24px;
  font: 18px/160% Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }

  & > a {
    color: #1e4ae9;
    text-decoration: none;
  }
`;

export const LinkTest = styled.span`
  color: var(--Link, #1e4ae9);
`

export const Error = styled.p`
  color: red;
`