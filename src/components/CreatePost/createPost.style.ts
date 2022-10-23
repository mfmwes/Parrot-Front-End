import styled from 'styled-components'


export const StyledButton = styled.button `
 &.publisher {
    background-color: #6033AA;
    border-radius: 30px;
    width: 164px;
    height: 28px;

    color: #FFFFFF; 
    display:block;
    margin-left: auto;
    margin-right: 22px;
    margin-bottom: 25px;

    @media only screen and (max-width: 400px) {
    width: 80px;
    }
 };`

export const StyledInput = styled.input `
    border-radius: 10px;
    border-color: #8BC34A;
    width: 540px;
    height: 120px;
    margin: 15px;
    margin-top: 50px;

    @media only screen and (max-width: 400px) {
    width: 200px;
 }`

export const CreatePostContainer = styled.div `
    display: flex;
    margin: auto;
    width: fit-content;
`