import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function waiting() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const ButtonExample = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      waiting().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  const donothing = () => {};

  return (
    <div>
      <div className="gap-2 d-grid">
        <Button variant="primary" size="lg">
          Block level btn
        </Button>
        <Button variant="secondary" size="lg">
          BLBL
        </Button>
      </div>
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : donothing}
      >
        {isLoading ? "Loading..." : "Click to Download"}
      </Button>
    </div>
  );
};

export default ButtonExample;
