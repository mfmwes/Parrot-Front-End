import { ListContainer, StyledContainer } from '../../styles/styled-components'
import { UserPhoto } from '../UserPhoto'
import { UserPost } from '../UserPost'
import { Paragraph, StyledButton } from './Profile.styles'
import { ProfileContainer } from './Profile.styles'

export const Profile = () => {
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
