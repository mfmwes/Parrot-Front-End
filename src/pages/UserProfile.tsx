import { Header } from "../components/Header"
import { Profile } from "../components/Profile"
import { StyledContainer } from "../styles/styled-components"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"



 const UserProfile = () => {
  return (
    <StyledContainer>
    <Header user={`Olá, ${'user'} |`}/>
     <Profile/>  
    </StyledContainer>
  )
}

export default UserProfile