import styled from "@emotion/styled"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name}/>
      <StyledDl>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </StyledDl>
    </Card>
  )
}

const StyledDl = styled.dl`
text-align: left;
margin-bottom: 0px;
dt {
  float: left;
}
dd {
  padding: 0 0 8px 32px;
  overflow-wrap: break-word;
}
`;