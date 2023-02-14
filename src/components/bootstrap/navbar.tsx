import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import CarouselExample from "./carousel";

const NavbarExample = () => {
  const [activeTab, setActiveTab] = useState("");
  console.log(activeTab);

  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-car"
            onClick={() => {
              setActiveTab("link-car");
            }}
          >
            Carousel Example!
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setActiveTab("link-2");
            }}
          >
            Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item
            eventKey="4.1"
            onClick={() => {
              alert("Hey");
            }}
          >
            Action
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {activeTab === "link-car" ? (
        // <CarouselExample />
        <p>Hello this is Tab 1</p>
      ) : activeTab === "link-2" ? (
        <div>This is Link 2 Tab</div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavbarExample;
