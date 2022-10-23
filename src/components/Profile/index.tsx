import React from 'react'
import { ListContainer, StyledContainer } from '../../styles/styled-components'
import { UserPhoto } from '../UserPhoto'
import { UserPost } from '../UserPost'
import { StyledButton } from './Profile.styles'
import { ProfileContainer } from './Profile.styles'

export const Profile = () => {
  return (
    <>
  <ProfileContainer>
      <>
        <UserPhoto/>
      </>
        <div style={{marginLeft:'50px'}}>
            <p>Wesley Militão</p>
            <p>Apê 113</p>
            <p>wes@gmail.com</p>
        </div>
      <StyledButton className='edit'> editar </StyledButton>
   </ProfileContainer>
   <ListContainer>
          <UserPost/>
          <UserPost/>
          <UserPost/>
   </ListContainer>
   </>
  )
}
