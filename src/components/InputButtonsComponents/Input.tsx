import styled from "styled-components";


export default function Input({...rest}) {
  return <StyledInput {...rest}/>;
}

const StyledInput = styled.input`
  background: rgba(0, 0, 0, 0.15);
  box-shadow: 0 8px 32px 0 rgba(117, 99, 99, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #010001;
  font-size: 1.4rem;
  font-weight: 600;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #8341a7;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #1d006dc5;
    font-weight: 100;
    font-size: 1.4rem;
  }
`;
