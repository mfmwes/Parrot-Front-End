import { StyledButton , StyledInput } from "./createPost.style"



export const CreatePost = () => {
  return (
    <> 
      <img className="create-post-photo" style={{height:'70px', width:'70px', borderRadius:'50%'}} src="src\img\img-placeholder.webp" alt="" />
      
     <StyledInput type='text' className="post"/>
     <StyledButton className="publisher">publicar</StyledButton>
      
    </>
    
  )
}
