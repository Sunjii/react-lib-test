import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

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
            eventKey="link-1"
            onClick={() => {
              setActiveTab("link-1");
            }}
          >
            Loooonger NavLink
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
      {activeTab === "link-1" ? (
        <div>This is Link 1 Tab</div>
      ) : activeTab === "link-2" ? (
        <div>This is Link 2 Tab</div>
      ) : (
        "Home"
      )}
    </>
  );
};

export default NavbarExample;
