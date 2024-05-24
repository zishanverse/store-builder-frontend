import {useState} from 'react';
import {useNavigate,Navigate, Link} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import {ImageWrapper, Image, FormWrapper, Header, Logo, Title,Heading, Subheading,Form,Label, Input, Button, LoginLink, Main,LinkTest, Error} from './style';

const SignupImage = () => (
  <ImageWrapper>
    <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/807ec45dff6189afb2594007d146fcbe35f941939afc035ac097f5cd85e1f970?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&" alt="Signup" loading="lazy" />
  </ImageWrapper>
);


const SignUp = () => {
  const [email_phone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [site_name, setSiteName] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const jwt = Cookies.get("jwt_token");
  const url = "https://store-builder-backend-production.up.railway.app";
  const renderUrl = "https://store-builder-backend.onrender.com";

  const signup = async(e) => {
    e.preventDefault();
    try {
      const userDetails = {email_phone, password, created_at: JSON.stringify(new Date()), site_name, category}
      const options = {method: "POST",url: `${renderUrl}/api/signup`, data: userDetails}
      const response = await axios(options);
      
      Cookies.set("jwt_token", response.data.jwtToken);
      Cookies.set(`user_site_id`, response.data[0].user_site_id);
      navigate("/plans");
    }
    catch (err) {
      setError(err.response.data);
    }
  }
  if (jwt !== undefined) {
    return <Navigate to="/" />
  }

  return (
  <Main>
    <SignupImage />
      <FormWrapper>
        <Header>
          <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/16147ccc33c7c7e68dca05bc0ec78ec6f90a8f63fac607854677ba2d2d37a9eb?apiKey=b8cc32bd74464d83be1bf3c8c52a5010&" alt="StoreBuilder Logo" loading="lazy" />
          <Title>StoreBuilder</Title>
        </Header>
        <Heading>Create Account....</Heading>
        <Subheading>Signup for creating your store account on store builder</Subheading>
        <Form onSubmit={signup}>
          <Label htmlFor="email" className="sr-only">
            Email / Phone
          </Label>
          <Input type="email" id="email" value={email_phone} onChange={(e) => setEmailPhone(e.target.value)} placeholder="Example@email.com" />
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" />
          <Label htmlFor='name' >Name Your Site</Label>
          <Input id="name"  value={site_name} onChange={(e) => setSiteName(e.target.value)} placeholder='Enter Site Name'/>
          <Label htmlFor='category' >Category</Label>
          <Input as="select" id="category" value={category} onChange={e => setCategory(e.target.value)} >
              <option value="normal" selected >Normal</option>
              <option value="wordpress" >Wordpress</option>
          </Input>
          <Button type="submit">Sign up</Button>
          <Error>*{error}</Error>
        </Form>
        <LoginLink>
          Already have an account? <Link to="/login">
            <LinkTest>Click here to Log in</LinkTest>
            </Link> 
        </LoginLink>
      </FormWrapper>
  </Main>
  )
};



export default SignUp;