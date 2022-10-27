import { createBrowserRouter } from "react-router-dom";
import  Feed from "../pages/Feed";
import  UserProfile  from "../pages/UserProfile";
import  LoginScreen  from "../pages/LoginScreen";
import Register from "../pages/Register";
import { Cadastro } from "../pages/Cadastro";

const router = createBrowserRouter([
   {
    path:'/',
    element: <Feed/>
   },
   {
    path:'/profile',
    element:<UserProfile/>
   },
   {
    path:'/login',
    element: <LoginScreen/>
   },
   {
     path:'register',
     element: <Register/>
   }
]);

export default router;
