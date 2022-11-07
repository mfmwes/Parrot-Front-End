import { CreatePost } from "../components/CreatePost"
import { Header } from "../components/Header"
import { NoCotent } from "../components/NoContent/NoCotent"
import { UserPost } from "../components/UserPost"
import { ListContainer, StyledContainer } from "../styles/styled-components"
import { useJwt } from "react-jwt"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

interface DataProps {
  name: string
}

const Feed = () => {
  const navigate = useNavigate()
  const [allPosts, setAllPosts] = useState([])
  const loginState = useSelector((store:RootStore) => store.userReducer.isLogged)
  console.log(loginState)


  useEffect(() => {
    navigateControl();
  }, []);
 
 const navigateControl = () => {
  if (loginState === false) {
    navigate('/')
    alert('É necessario fazer login para acessar o Parrot')
  }
 }
 
  
  return (
    <StyledContainer>
      <Header user={`Olá, ${localStorage.getItem('name')} |`}/>
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
