import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const AlertExample = () => {
  const [show, setShow] = useState(true);

  return (
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Alert Examples</Accordion.Header>
        <Accordion.Body>
          {[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))}
          <Alert>
            This is <Alert.Link href="#">Example link</Alert.Link>. click here!
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </Alert>
          {show ? (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          ) : (
            <Button onClick={() => setShow(true)}>Show Alert</Button>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AlertExample;
