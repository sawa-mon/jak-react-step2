import { Router } from "./router/Router";
import styled from "styled-components"

function App() {
  return (
    <Router/>
  );
}

export default App;

const StyledHomePosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
