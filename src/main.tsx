import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import GlobalStyle from './styles/globalStyles';
import router from "./router";
import { Feed } from './pages/Feed';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    {/* <RouterProvider router={router}/> */}
    <Feed/>
  </React.StrictMode>
)
