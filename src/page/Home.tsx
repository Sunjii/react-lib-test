import React from "react";
import { Badge, Button } from "react-bootstrap";
import AccordionExample from "../components/bootstrap/accordion";
import AlertExample from "../components/bootstrap/alert";
import ButtonExample from "../components/bootstrap/button";
import CarouselExample from "../components/bootstrap/carousel";
import NavbarExample from "../components/bootstrap/navbar";

const Home = () => {
  return (
    <div>
      <div>
        <NavbarExample />
        <br />
      </div>
      <div>
        <CarouselExample />
      </div>
      <div>
        <ButtonExample />
      </div>
      <h1>
        Example!
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
      <div>
        <AccordionExample />
        <br />
        <AlertExample />
      </div>
    </div>
  );
};

export default Home;
