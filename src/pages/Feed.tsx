import { CreatePost } from "../components/CreatePost"
import { Header } from "../components/Header"
import { UserPost } from "../components/UserPost"
import { ListContainer, StyledContainer } from "../styles/styled-components"

 const Feed = () => {
  const usuario = 'usuario'
  return (
    <>
    <Header user={`Olá, ${usuario} |`}/>
    <StyledContainer>
      <CreatePost/>
      <ListContainer> 
      <UserPost/>
      <UserPost/>
      <UserPost/>
      <UserPost/>
      <UserPost/>
    </ListContainer>
    </StyledContainer>
    </>  
  )
}

export default Feed;
