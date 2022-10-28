import styled from "styled-components";


export default function Button({...rest}) {
  return <StyledButton {...rest}/>;
}

const StyledButton = styled.button`
  font-weight: 400;
  background: #673AB7;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: #000000;
  border-radius: 2rem;
  margin-top: 50px;
  cursor: pointer;
`;
