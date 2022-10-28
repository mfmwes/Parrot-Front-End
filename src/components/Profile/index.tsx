import { ListContainer, StyledContainer } from '../../styles/styled-components'
import { UserPhoto } from '../UserPhoto'
import { UserPost } from '../UserPost'
import { Paragraph, StyledButton } from './Profile.styles'
import { ProfileContainer } from './Profile.styles'
import { useSelector } from 'react-redux'
import { useJwt } from 'react-jwt'
import { RootStore } from '../../redux/store'

export const Profile = () => {
  const token = useSelector((store:RootStore) => String(store.userReducer.token))
  const decode = () => {
   const { decodedToken } = useJwt(token)
   return decodedToken
  }

const data:any = decode()


  return (
    <>
  <ProfileContainer>
      <>
        <UserPhoto/>
      </>
        <div style={{marginLeft:'50px'}}>
            <Paragraph className='username'>Wesley Militão</Paragraph>
            <Paragraph className='apartment'>Apê 113</Paragraph>
            <Paragraph className='email'>wes@gmail.com </Paragraph>
            <Paragraph>00 postagens</Paragraph>
        </div>
      <StyledButton className='edit'> editar </StyledButton>
   </ProfileContainer>
   <ListContainer>
          <UserPost/>
          <UserPost/>
          <UserPost/>
          <UserPost/>
          <UserPost/>
          <UserPost/>
          <UserPost/>
          <UserPost/>
   </ListContainer>
   </>
  )
}
