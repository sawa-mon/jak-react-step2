import { Router } from "./router/Router";
import styled from "styled-components"
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Router/>
    </UserProvider>
  );
}

export default App;

const StyledHomePosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
