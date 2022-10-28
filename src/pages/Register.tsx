import {useState, useEffect} from 'react'
import styled from "styled-components";
import Button from "../components/InputButtonsComponents/Button";
import Icon from "../components/InputButtonsComponents/Icon";
import Input from "../components/InputButtonsComponents/Input"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from '../img/parrot-logo-2.png'
import api from '../services/config'
import {useNavigate} from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [apartment, setApartment] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

const newUser = {
	name:`${name}`,
	email:`${email}`,
	apartment:`${Number(apartment)}`,
	password:`${password}`,
	photo:`${photo}`
}
  
const registerUser = () => {
   api.post('/register', newUser)
  .then(response => {
    console.log(response.data)
    alert('usuario cadastrado com sucesso'),
    navigate('/login')
  })
  .catch(error => console.log(error))
  }


  return (
    <MainContainer>
      <img src={Logo} alt="" />
      <WelcomeText> CADASTRO </WelcomeText>
      <InputContainer>
        <Input value={name} onChange={(e:any) =>  setName(e.target.value)} type="text" placeholder="Nome" required/>
        <Input value={email} onChange={(e:any) => setEmail(e.target.value)} type="text" placeholder="Email" required />
        <Input value={password} onChange={(e:any) => setPassword(e.target.value)} type="password" placeholder="Senha" required/>
        <Input value={confirmPassword} onChange={(e:any) => setConfirmPassword(e.target.value)}type="password" placeholder="Confirmar Senha" required/>
        <Input value={apartment} onChange={(e:any) => setApartment(e.target.value)}type="text" placeholder="Unidade/apartamento" required/>
        <Input value={photo} onChange={(e:any) => setPhoto(e.target.value)}type="text" placeholder="link da foto" />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={registerUser}> CADASTRAR </Button>
      </ButtonContainer>
      
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
    </MainContainer>
  );
}

const FacebookBackground =
"linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground =
"linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground =
"linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";


const MainContainer = styled.div`
  margin: auto;
  margin-top: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(194, 189, 189, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 4rem 0 9rem ;
  padding-bottom: 25px;
`;

/* const logo = styled.logo`
  margin: 3rem 0 2rem 0;
`;
*/

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 7rem 0 7rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: -5rem 0 3rem 0;
  width: 80%;
`;

export default Register;
