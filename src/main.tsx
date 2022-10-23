import React from 'react'
import ReactDOM from 'react-dom/client'

//globalStyles
import GlobalStyle from './styles/globalStyles';

//routes
import { RouterProvider } from "react-router-dom";
import router from "./router";




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
