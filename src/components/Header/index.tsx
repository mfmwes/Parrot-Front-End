import { StyledHeader } from "../../styles/styled-components"

export const Header = () => {
  return (
    <StyledHeader>
        <img src="src\img\parrot-logo-2.png" alt="" />
        <div>           
            <span style={{color:'#76BB4C'}}>Olá, usuário |</span>
            <span style={{color:'#6033AA'}}>sair</span>
        </div>
    </StyledHeader>
  )
}
