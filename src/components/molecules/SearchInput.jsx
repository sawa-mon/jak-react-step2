import styled from "styled-components"
import { Button } from "../atoms/button/Button"
import { Input } from "../atoms/input/Input"

export const SearchInput = () => {
  return (
    <StyledContainer>
      <Input placeholder="検索条件を入力" />
      <StyledButtonWrapper>
        <Button secondary>検索</Button>
      </StyledButtonWrapper>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
`;

const StyledButtonWrapper = styled.div`
  padding-left: 8px;
`;