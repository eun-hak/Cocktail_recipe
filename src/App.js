import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/Templete";
import Rating from "./components/Star";
import ColorSchemesExample from "./components/Nav/index";
// import app from "./firebase";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useParams,
} from "react-router-dom";
import Explain from "./pages/Explain";
import Rank from "./pages/Rank";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import img_array from "./components/Data";
import { useState } from "react";
import wrapper from "./store/configureStore";
// import Login2 from "./components/Auth/Login.js";
// import Register from "./components/Register";
import Register2 from "./pages/Register";
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  let [explain] = useState(img_array);

  return (
    <div className="App">
      {/* <ColorSchemesExample></ColorSchemesExample> */}

      <BrowserRouter>
        <GlobalStyle />
        <TodoTemplate>
          <Routes>
            <Route path="/Explain/:id" element={<Explain />}></Route>{" "}
            {/* :id로 무한 생성 가능*/}
            <Route path="/Rank" element={<Rank />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/auth/login" element={<Login2 />}></Route> */}
            {/* <Route path="/auth/register" element={<Register />}></Route> */}
            <Route path="/register" element={<Register2 />}></Route>
          </Routes>
        </TodoTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
