import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "../../pages/Login";
import { useState } from "react";
function ColorSchemesExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // <Login setIsLoggedIn={setIsLoggedIn} />;
  return (
    <>
      {isLoggedIn ? (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
              <Nav className="me-auto">
                <Nav.Link href="/">홈</Nav.Link>
                <Nav.Link href="/Rank">랭킹</Nav.Link>
                <Nav.Link href="/Signin">내정보</Nav.Link>
                <Nav.Link href="/Signin">로그아웃</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      ) : (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
              <Nav className="me-auto">
                <Nav.Link href="/">홈</Nav.Link>
                <Nav.Link href="/Rank">랭킹</Nav.Link>
                <Nav.Link href="/register">회원가입</Nav.Link>
                <Nav.Link href="/Login">로그인</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      )}
    </>
  );
}

export default ColorSchemesExample;
