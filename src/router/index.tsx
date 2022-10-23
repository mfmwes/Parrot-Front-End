import { createBrowserRouter } from "react-router-dom";
import  Feed from "../pages/Feed";
import  UserProfile  from "../pages/UserProfile";



const router = createBrowserRouter([
   {
    path:'/',
    element: <Feed/>
   },
   {
    path:'/profile',
    element:<UserProfile/>
   }
]);

export default router;
