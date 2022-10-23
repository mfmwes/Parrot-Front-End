import { CreatePostContainer, StyledButton , StyledInput } from "./createPost.style"
import { Link } from "react-router-dom"


export const CreatePost = () => {
  return (
    <CreatePostContainer className="container"> 
        <Link to={'/profile'}>
       <img className="create-post-photo" style={{height:'70px', width:'70px', borderRadius:'50%', marginTop:'65px'}} src="src\img\img-placeholder.webp" alt="" />
        </Link>    
       <div>
         <StyledInput type='text' required/>
         <StyledButton className="publisher">publicar</StyledButton>
       </div>
     </CreatePostContainer>
  
    
  )
}
