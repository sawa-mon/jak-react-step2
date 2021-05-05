import styled from "styled-components"
import { BaseButton } from "./BaseButton"

export const Button = (props) => {
  const { children, onClick } = props
  return <StyledButton onClick={onClick} secondary={props.secondary}>{ children }</StyledButton>
}

const StyledButton = styled(BaseButton)`
  border-radius: 50%;
`;