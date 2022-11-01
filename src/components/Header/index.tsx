import { StyledHeader, StyledBox } from "../../styles/styled-components"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { logout } from "../../redux/userSlice"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { RootStore } from "../../redux/store"

type HeaderProps = {
  user: string;
}

export const Header = (props: HeaderProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((store: RootStore) => store.userReducer.token)
  const email = useSelector((store: RootStore) => store.userReducer.email)

  const handleLogout = () => {
    dispatch(logout({ token, email }))
    navigate('/')
  }

  return (
    <StyledHeader>
      <Link to={'/'}>
        <img src='src\img\parrot-logo-2.png' alt="" />
      </Link>
      <StyledBox className="header">
        <Link to={'/profile'}>
          <span style={{ color: '#76BB4C', fontSize: '24px', fontWeight: '600' }}>{props.user}</span>
        </Link>
        <span onClick={handleLogout} style={{ color: '#6033AA', fontSize: '18px', fontWeight: '600', cursor: 'pointer', marginTop:'3px' }}>sair</span>
      </StyledBox>
    </StyledHeader>
  )
}
