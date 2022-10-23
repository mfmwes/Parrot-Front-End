import { Header } from "../components/Header"
import { Profile } from "../components/Profile/Profile"
import { StyledContainer } from "../styles/styled-components"
const usuario = 'usuario'

 const UserProfile = () => {
  return (
    <>
    <Header user={`Olá, ${usuario} |`}/>
    <StyledContainer>
     
    </StyledContainer>
    </>
  )
}

export default UserProfile