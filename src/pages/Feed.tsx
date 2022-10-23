import { CreatePost } from "../components/CreatePost"
import { Header } from "../components/Header"
import { UserPost } from "../components/UserPost/UserPost"
import { StyledContainer } from "../styles/styled-components"

 const Feed = () => {
  const usuario = 'usuario'
  return (
    <>
    <Header user={`Olá, ${usuario} |`}/>
    <StyledContainer>
      <CreatePost/>
      <UserPost/>
      <UserPost/>
      <UserPost/>
      <UserPost/>
      <UserPost/>
    </StyledContainer>
    </>  
  )
}

export default Feed;
