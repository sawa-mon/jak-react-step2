import styled from "styled-components"

export const Input = (props) => {
  const { placeholder = "" } = props
  return (
    <StyledInput placeholder={placeholder} type="text" />
  )
}

const StyledInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 100px;
  outline: none;
`;