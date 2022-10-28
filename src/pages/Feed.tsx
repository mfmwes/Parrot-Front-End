import { CreatePost } from "../components/CreatePost"
import { Header } from "../components/Header"
import { NoCotent } from "../components/NoContent/NoCotent"
import { UserPost } from "../components/UserPost"
import { ListContainer, StyledContainer } from "../styles/styled-components"
import { useJwt } from "react-jwt"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import { useState } from 'react'


const Feed = () => {
  const [allPosts, setAllPosts] = useState([])

  const info = useSelector((store:RootStore) => (store.userReducer.email))
  const token = useSelector((store: RootStore) => String(store.userReducer.token))
  const decode = () => {
   const {decodedToken} = useJwt(token)
   return decodedToken
  }

 const data = decode()
 console.log(data)


  return (
    <StyledContainer>
      <Header user={`Olá, ${info} |`}/>
      <CreatePost />
      <ListContainer>
      {allPosts.length < 1 
      ? ( <NoCotent/> ) 
      : (allPosts.map((post) => <UserPost/>))};
      </ListContainer>
    </StyledContainer>
  )
}

export default Feed;
