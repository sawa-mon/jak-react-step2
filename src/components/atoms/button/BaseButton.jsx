import styled from "styled-components"

export const BaseButton = (props) => {
  const {children} = props
  return (
    <StyledButton secondary={props.secondary} onClick={props.onClick}>{ children }</StyledButton>
  )
}

const StyledButton = styled.button`
  color: ${(props) => (props.secondary ? "#c7d2e2" : "#fff")};
  background-color: ${(props) => (props.secondary ? "#11999e" : "#40514e")};
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 1000px;
  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;