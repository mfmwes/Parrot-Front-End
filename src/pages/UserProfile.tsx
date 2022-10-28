import { Header } from "../components/Header"
import { Profile } from "../components/Profile"
import { StyledContainer } from "../styles/styled-components"
import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";
import { loginUser } from "../redux/userSlice";
import { RootStore } from "../redux/store";


const UserProfile = () => {
  const info = useSelector((store: RootStore) => String(store.userReducer.email))
  const token = useSelector((store: RootStore) => String(store.userReducer.token))
  const decode = () => {
    const { decodedToken } = useJwt(token)
    console.log(decodedToken)
    return decodedToken
  }

  const data:any = decode()
 

  return (
    <StyledContainer>
      <Header user={`Olá, ${info} |`} />
      <Profile />
    </StyledContainer>
  )
}

export default UserProfile