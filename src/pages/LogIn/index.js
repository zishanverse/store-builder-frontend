import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import {ImageWrapper, Image, ContentWrapper, Header,  Logo, Title, Heading, Subheading, Label, Input, Button, SignUpLink, LinkTest, Error} from './style';

const LogIn = props => {
    const [email_phone, setEmailPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const url = "https://store-builder-backend-production.up.railway.app";
    const formSubmit = async (e) => {
        e.preventDefault();
        const userDetails = {email_phone, password};
        const options = {
            method: "POST",
            url: `${url}/login/`,
            data: userDetails
        }
        try {
            const res = await axios(options);
            Cookies.set("jwt_token", res.data.jwtToken);
            navigate("/plans");
        }
        catch (err){
            setError(err);
            setError(err.response.data);
        }

    }
  return (
    <main style={{ backgroundColor: "#fff", padding: "14px 24px 25px" }}>
      <div style={{ gap: "20px", display: "flex" }}>
        <ImageWrapper>
          <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/807ec45dff6189afb2594007d146fcbe35f941939afc035ac097f5cd85e1f970?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&" alt="Decorative" />
        </ImageWrapper>
        <ContentWrapper>
          <div style={{ display: "flex", flexDirection: "column", fontSize: "16px", fontWeight: 400, lineHeight: "100%" }}>
            <Header>
              <Logo loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16147ccc33c7c7e68dca05bc0ec78ec6f90a8f63fac607854677ba2d2d37a9eb?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&" alt="Logo" />
              <Title>StoreBuilder</Title>
            </Header>
            <Heading>Log in...</Heading>
            <Subheading>login to your acc and access your store</Subheading>
            <form onSubmit={formSubmit}>
              <Label htmlFor="email">Email / Phone</Label>
              <Input type="email" id="email" name="email" value={email_phone} onChange={(e) => setEmailPhone(e.target.value)} placeholder="Example@email.com" />
              
              <Label htmlFor="password" marginTop="9px">Password</Label>
              <Input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" />
              
              <Button type="submit">Sign in</Button>
              <Error>*{error}</Error>
            </form>
            <SignUpLink>
              Don't you have an account?{" "}
              <Link to="/signup">
                <LinkTest>Sign up</LinkTest>
              </Link>
            </SignUpLink>
          </div>
        </ContentWrapper>
      </div>
    </main>
  );
}

export default LogIn;