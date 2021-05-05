import "./App.css";
import axios from "axios"


function App() {
  const onClickUser0 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })
  }
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div>
      <button onClick={onClickUser0}>users</button>
      <button onClick={onClickUser1}>id=1のusers</button>
    </div>
  );
}

export default App;
