import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import MenuButton from "../buttons/navigation/MenuButton";

import "./css/Navigation.css";

const UserNavigation = () => {
  return (
    <>
      <Navbar sticky="top" className="py-2 nav-border">
        <Container>
          <Navbar.Brand className="header-workoutly">
            Workoutly
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end user-menu-items">
            <Nav>
              <Nav.Link as="routines">
                <MenuButton link="Routines" method="get" />
              </Nav.Link>
              <Nav.Link as="measurements">
                <MenuButton link="Measurements" method="get" />
              </Nav.Link>
              <Nav.Link as="account">
                <MenuButton link="Account" method="get" />
              </Nav.Link>
              <Nav.Link as="logout">
                <MenuButton link="Logout" method="post" />
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

export default UserNavigation;
