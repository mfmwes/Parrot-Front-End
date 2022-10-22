import { StyledHeader, StyledBox } from "../../styles/styled-components"

type HeaderProps = {
  user:string;
}

export const Header = (props:HeaderProps) => {
  return (
    <StyledHeader>
        <img src="src\img\parrot-logo-2.png" alt="" />
        <StyledBox className="header">           
            <span style={{color:'#76BB4C', fontSize:'24px', fontWeight:'600'}}>{props.user}</span>
            <span style={{color:'#6033AA', fontSize:'16px', fontWeight:'600'}}>sair</span>
        </StyledBox>
    </StyledHeader>
  )
}
