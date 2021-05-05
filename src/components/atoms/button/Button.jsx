import styled from "styled-components"
import { BaseButton } from "./BaseButton"

export const Button = (props) => {
  console.log(props)
  const { children } = props
  return <StyledButton secondary={props.secondary}>{ children }</StyledButton>
}

const StyledButton = styled(BaseButton)`
  border-radius: 50%;
`;