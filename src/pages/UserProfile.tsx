import { Header } from "../components/Header"
import { Profile } from "../components/Profile"
import { StyledContainer } from "../styles/styled-components"
import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";
import { loginUser } from "../redux/userSlice";
import { RootStore } from "../redux/store";


const UserProfile = () => {
  return (
    <StyledContainer>
      <Header user={`Olá, ${localStorage.getItem('name')} |`} />
      <Profile />
    </StyledContainer>
  )
}

export default UserProfile