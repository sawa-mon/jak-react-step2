import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>

import logo from './logo.svg';
import './App.css';
import {Home} from './Home'

function App() {
  return (
    <div>
      <Home/>
    </div>

  );
}

export default App;
