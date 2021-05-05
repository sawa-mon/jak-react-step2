import styled from "styled-components"

export const UserIconWithName = (props) => {
  const { image, name } = props
  return (
    <StyledContainer>
      <StyledImage height={160} width={160} src={image} alt="プロフィール"/>
      <StyledName>{name}</StyledName>
    </StyledContainer>
  )
}

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