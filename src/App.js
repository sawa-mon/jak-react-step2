import { Router } from "./router/Router";
import styled from "styled-components"
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil"

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router/>
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;

const StyledHomePosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
