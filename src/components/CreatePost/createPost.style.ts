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
 }`

export const StyledInput = styled.input `
&.post{
    border-radius: 10px;
    border-color: #8BC34A;
    width: 540px;
    height: 120px;
    margin: 15px;
    margin-top: 50px;
    display: inline-block; 

}
`

export const CreatePostContainer = styled.div `
    border: '1px solid #C5C5C5'; 
    display: flex;
    margin: auto;
    width: fit-content;
`