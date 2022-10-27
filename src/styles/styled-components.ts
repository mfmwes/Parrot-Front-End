import styled from 'styled-components'

export const StyledHeader = styled.header `
 background: #FFFFFF;
 box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
 display: flex;
 justify-content: space-between;

`

export const StyledContainer = styled.div `
    max-width: 1024px;
    height:100%;
    margin: 0 auto;
    text-align: center;
    border: 3px solid #C5C5C5;
    border-top: 0;
`

export const StyledBox = styled.div `
&.header {margin-right: 5%;
margin-top: 15px;
justify-content: center;
}
`

export const ListContainer = styled.div `
    height: 100%;
`

// Login Components Styles


export const MainContainer = styled.div`
margin: auto;
margin-top: 5%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
width: 30vw;
background: rgba(194, 189, 189, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #000000;
text-transform: uppercase;
letter-spacing: 0.4rem;
@media only screen and (max-width: 320px) {
  width: 80vw;
  height: 90vh;
  hr {
    margin-bottom: 0.3rem;
  }
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 360px) {
  width: 80vw;
  height: 90vh;
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 411px) {
  width: 80vw;
  height: 90vh;
}

@media only screen and (min-width: 768px) {
  width: 80vw;
  height: 80vh;
}
@media only screen and (min-width: 1024px) {
  width: 70vw;
  height: 50vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 80vh;
}
`;

export const WelcomeText = styled.h2`
margin: 3rem 0 2rem 0;
`;

/* const logo = styled.logo`
margin: 3rem 0 2rem 0;
`;
*/

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 15%;
width: 100%;
`;

export const ButtonContainer = styled.div`
margin: 1rem 0 2rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

export const LoginWith = styled.h5`
cursor: pointer;
`;

export const HorizontalRule = styled.hr`
width: 90%;
height: 0.3rem;
border-radius: 0.8rem;
border: none;
background: linear-gradient(to right, #001307 0%, #098060 79%);
background-color: #ffffff;
margin: 1.5rem 0 1rem 0;
backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin: 2rem 0 3rem 0;
width: 80%;
`;

export const ForgotPassword = styled.h4`
cursor: pointer;
`;

