import styled from 'styled-components'


export const PostContainer = styled.div `
    width: 100%;
    height: 250px;
    border: 1px solid #C5C5C5;
    display: flex;
    text-align: left;
    align-items: center;
    padding: 10px 0px;
    
    `
export const UserImage = styled.img `
    height: 70px;
    width: 70px;
    margin-right: 25px;
    margin-left: 15px;
    border-radius: 50%; 
`

export const UserInfo = styled.span`
    color:#76BB4C;
    font-size:18px;
    display: block;
    font-weight: 400;   
`
export const PostDate = styled.span `
    font-size: 16px;
    color: #909090;
    display: block;
    font-weight: 400;  
`
export const PostContent = styled.span`
    font-size: 18px;
    color: #000000;
    display: block;
    font-weight: 400;
` 