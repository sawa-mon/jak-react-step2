import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import { UserContext } from "../../providers/UserProvider";
import { Button } from "../atoms/button/Button"

export const Top = () => {
  const history = useHistory()
  const {setUserInfo} = useContext(UserContext)

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true})
    history.push("/users")
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    history.push("/users")
  }

  return (
    <StyledContainer>
      <h2>TOPページです</h2>
      <Button secondary onClick={onClickAdmin}>管理者ユーザー</Button>
      <br />
      <br/>
      <Button secondary onClick={onClickGeneral}>一般ユーザー</Button>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
text-align: center;
`;