import React from 'react'
import ReactDOM from 'react-dom/client'

//globalStyles
import GlobalStyle from './styles/globalStyles';

//routes
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { StyledContainer } from './styles/styled-components';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <StyledContainer>
    <RouterProvider router={router}/>
    </StyledContainer>
  </React.StrictMode>
)
