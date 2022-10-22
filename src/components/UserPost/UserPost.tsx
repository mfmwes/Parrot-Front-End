import { PostContainer, UserInfo, PostContent, PostDate, UserImage } from "./UserPost.styles"

export const UserPost = () => {
  return (
    <PostContainer>
        <div>
        <UserImage src="src\img\img-placeholder.webp"/>
        </div>
        <div>
            <UserInfo>Wesley - Apê 113</UserInfo>
            <PostDate>02/09/1998</PostDate>
            <PostContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi obcaecati provident eligendi ipsa, fuga maxime libero laborum omnis. Maiores quo sunt cupiditate eius doloribus animi eos ullam officiis autem exercitationem?
            </PostContent>
        </div>   
    </PostContainer>
  )
}
