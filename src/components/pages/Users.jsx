import styled from "styled-components"
import { Button } from "../atoms/button/Button"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"
import { useRecoilState } from "recoil"
import { userState } from "../../store/userState"

const users = [...Array(10).keys()].map((value) => {
  return {
    id: value,
    name: `カード${value+1}`,
    image: "https://source.unsplash.com/ZRns2R5azu0",
    email: "12345@gmail.com",
    phone: "090-0000-0000",
    company: {
      name: "テスト会社",
    },
    website: "https://google.com"
  }
})

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext)
  const [ userInfo, setUserInfo] = useRecoilState(userState)
  
  const onClickSwitch = () => setUserInfo({isAdmin: !userInfo.isAdmin})

  return (
    <StyledContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <Button secondary onClick={onClickSwitch}>切替</Button>
      <StyledUserArea>
        {users.map((user) => (
        <UserCard key={users.id} user={user} />
        ))}
      </StyledUserArea>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
padding: 24px;
`;

const StyledUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap:20px;
`;