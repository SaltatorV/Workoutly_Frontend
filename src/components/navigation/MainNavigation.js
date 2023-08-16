import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import LoginButton from "../buttons/navigation/LoginButton";
import RegisterButton from "../buttons/navigation/RegisterButton";

import "./css/Navigation.css";

const MainNavigation = () => {
  return (
    <>
      <Navbar sticky="top" className="py-2 nav-border">
        <Container>
          <Navbar.Brand className="header-workoutly">
            Workoutly
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end user-menu-items">
            <Nav>
              <Nav.Link>
                <LoginButton />
              </Nav.Link>
              <Nav.Link>
                <RegisterButton />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainNavigation;
