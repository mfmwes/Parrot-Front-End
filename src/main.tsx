import React from 'react'
import ReactDOM from 'react-dom/client'

//globalStyles
import GlobalStyle from './styles/globalStyles';

//routes
import { RouterProvider } from "react-router-dom";
import router from "./router";

//redux
import {Provider} from 'react-redux'
import store from './redux/store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle/> 
    <RouterProvider router={router}/>   
    </Provider>
  </React.StrictMode>
)
