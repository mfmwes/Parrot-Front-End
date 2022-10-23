import { StyledHeader, StyledBox } from "../../styles/styled-components"
import {Link} from 'react-router-dom'

type HeaderProps = {
  user:string;
}

export const Header = (props:HeaderProps) => {
  return (
    <StyledHeader>
        <Link to={'/'}>
        <img src='src\img\parrot-logo-2.png' alt="" />
        </Link>
        <StyledBox className="header">           
            <Link to={'/profile'}>
              <span style={{color:'#76BB4C', fontSize:'24px', fontWeight:'600'}}>{props.user}</span>
            </Link>
            <span style={{color:'#6033AA', fontSize:'16px', fontWeight:'600'}}>sair</span>
        </StyledBox>
    </StyledHeader>
  )
}
