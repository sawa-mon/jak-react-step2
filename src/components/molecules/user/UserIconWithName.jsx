import { memo,  } from "react"
import styled from "styled-components"
import { useRecoilValue } from "recoil"
import { userState } from "../../../store/userState"

export const UserIconWithName = memo((props) => {
  const { image, name } = props
  // const { userInfo } = useContext(UserContext)
  const userInfo = useRecoilValue(userState)
  
  const isAdmin = userInfo ? userInfo.isAdmin : false
  
  return (
    <StyledContainer>
      <StyledImage height={160} width={160} src={image} alt="プロフィール"/>
      <StyledName>{name}</StyledName>
      {isAdmin && <StyledEdit>編集</StyledEdit>}
    </StyledContainer>
  )
})

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

const StyledName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const StyledEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;