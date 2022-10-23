import { CreatePost } from "../components/CreatePost"
import { Header } from "../components/Header"
import { NoCotent } from "../components/NoContent/NoCotent"
import { UserPost } from "../components/UserPost"
import { ListContainer, StyledContainer } from "../styles/styled-components"

 const Feed = () => {
  const usuario = 'usuario'
  return (
    <>
    <Header user={`Olá, ${usuario} |`}/>
      <CreatePost/>
      <ListContainer> 
      {/* <UserPost/>
      <UserPost/>
      <UserPost/>
      <UserPost/>
      <UserPost/> */}
      <NoCotent/>
    </ListContainer>
    </>  
  )
}

export default Feed;
