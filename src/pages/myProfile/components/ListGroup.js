import React from "react";
import { ListGroup } from "react-bootstrap";

const InfoList = () => {
  return (
      <ListGroup variant="flush">
          <ListGroup.Item>
                212-555-5555
          </ListGroup.Item>
          <ListGroup.Item>kathi.snowy@email.com</ListGroup.Item>
          <ListGroup.Item>Kathi Snowy</ListGroup.Item>
          <ListGroup.Item>*********</ListGroup.Item>
      </ListGroup>
  );
};

export default InfoList;
