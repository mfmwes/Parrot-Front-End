import styled from 'styled-components'

export const ProfileContainer = styled.div `
    display: flex;
    align-items: center;
    border: 0px 1px 1px 1px;
    border-color: #C5C5C5;
    margin-bottom: 55px;
    margin-left: 50px;
    margin-top: 20px;
`

export const StyledButton = styled.button `
 &.edit {
    background-color: #76BB4C;
    border-radius: 30px;
    border: none ;
    width: 164px;
    height: 38px;
    color: #FFFFFF; 
    display:block;
    margin-left: auto;
    margin-right: 22px;
    margin-bottom: 75px;
    font-size: 16px;
 }`

export const Paragraph = styled.p `
    &.username {
        color:#76BB4C;
        font-size:24px;
    }

    &.apartment,.email {
        color: #000000;
        font-size:16px;
    }
`