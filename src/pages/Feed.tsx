import { CreatePost } from "../components/CreatePost"
import { Header } from "../components/Header"
import { UserPost } from "../components/UserPost/UserPost"
import { StyledContainer } from "../styles/styled-components"

const usuario = 'usuario'

export const Feed = () => {
  return (
    <>
    <Header user={`Olá, ${usuario} |`}/>
    <StyledContainer>
      <CreatePost/>
      <UserPost/>
      <UserPost/>
      <UserPost/>
      <UserPost/>
    </StyledContainer>
    </>  
  )
}
