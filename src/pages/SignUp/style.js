import styled from "styled-components";


export const Main = styled.main`
  display: flex;
  gap: 20px;
  padding: 14px 24px 26px;
  background-color: #fff;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 61%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1.03;
  object-fit: cover;
  margin-top: 8px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const FormWrapper = styled.div`
  width: 39%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
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
  width: 35px;
  aspect-ratio: 1;
  object-fit: contain;
`;

export const Title = styled.h1`
  font-family: "Inria Sans", sans-serif;
  font-style: italic;
  margin: 0;
`;

export const Heading = styled.h2`
  margin: 95px 0 0;
  color: rgba(6, 6, 6, 0.8);
  font: 600 32px "Poppins", sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const Subheading = styled.p`
  margin: 14px 0 0;
  color: rgba(57, 57, 57, 0.86);
  font: 600 16px "Poppins", sans-serif;
`;

export const Form = styled.form`
  margin-top: 47px;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const Label = styled.label`
  color: var(--Primary-text, #0c1421);
  font: 16px "Roboto", sans-serif;
  letter-spacing: 0.16px;
`;

export const Input = styled.input`
  padding: 16px 15px;
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 12px;
  background-color: #f7fbff;
  color: #8897ad;
  font: 16px "Roboto", sans-serif;
  letter-spacing: 0.16px;

  &::placeholder {
    color: #8897ad;
  }

  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

export const Button = styled.button`
  margin-top: 56px;
  padding: 12px 60px;
  border: none;
  border-radius: 12px;
  background-color: #000;
  color: #fff;
  font: 20px "Roboto", sans-serif;
  letter-spacing: 0.2px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 12px 20px;
  }
`;

export const LoginLink = styled.p`
  margin-top: 44px;
  font: 18px/1.6 "Roboto", sans-serif;
  letter-spacing: 0.18px;
  text-align: center;
  text-decoration: none;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
  & > a {
    color: #1e4ae9;
    text-decoration: none;
  }
`;

export const LinkTest = styled.span`
  color: var(--Link, #1e4ae9);
`;

export const Error = styled.p`
color: red;`;