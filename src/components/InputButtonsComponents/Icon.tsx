import styled from "styled-components";

const FacebookBackground =
"linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";

type IconProps = {
  color:string;
  children:any;  
}

export default function Icon(props:IconProps) {
  return <StyledIcon color={props.color}> {props.children} </StyledIcon>;
}

const StyledIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  background:${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: #ffffff;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
