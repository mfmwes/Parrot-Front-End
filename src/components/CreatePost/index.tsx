import { CreatePostContainer, StyledButton , StyledInput } from "./createPost.style"



export const CreatePost = () => {
  return (
    <CreatePostContainer className="container">     
       <img className="create-post-photo" style={{height:'70px', width:'70px', borderRadius:'50%', margin:'auto'}} src="src\img\img-placeholder.webp" alt="" />
       <div>
         <StyledInput type='text' className="post"/>
         <StyledButton className="publisher">publicar</StyledButton>
       </div>
     </CreatePostContainer>
  
    
  )
}
