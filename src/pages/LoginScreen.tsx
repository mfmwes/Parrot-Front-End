import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Input from '../components/InputButtonsComponents/Input';
import Icon from "../components/InputButtonsComponents/Icon";
import Button from "../components/InputButtonsComponents/Button";
import {
  MainContainer, InputContainer,
  WelcomeText, ButtonContainer, LoginWith, HorizontalRule, IconsContainer,
  ForgotPassword
} from "../styles/styled-components";
import Logo from '../img/parrot-logo-preto.png'
import { loginUser } from '../redux/userSlice';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import Background from '../img/backgroundLogin.jpeg'

const LoginScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const data = JSON.stringify({
        email,
        password
      })
      const response = await axios.post('http://localhost:3001/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data)
      dispatch(loginUser({token: response.data.token, email }));
      alert('login successful')
      navigate('/dashboard')
    } catch (err) {
      alert('email ou senha não correspondem aos registros')
      console.log(err)
    }
  }

  return (
    <div style={{background:`url(${Background})`, height:'100vh', backgroundSize:'cover'}}>
    <MainContainer>
      <img src={Logo} alt="" style={{width:'265px', height:'90px'}} />
      <WelcomeText>LOGIN</WelcomeText>
      <InputContainer>
        <Input value={email} onChange={(e:any) => setEmail(e.target.value)} type="text" placeholder="Email" />
        <Input value={password} onChange={(e:any) => setPassword(e.target.value)} type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleLogin}> ENTRAR </Button>
      </ButtonContainer>
      <Link to={'/register'}>
        <LoginWith>ou cadastre-se</LoginWith>
      </Link>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Esqueceu sua senha ?</ForgotPassword>
    </MainContainer>
    </div>
  );
}
const FacebookBackground =
  "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground =
  "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground =
  "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";



export default LoginScreen;