import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const InputArea = () => {
  return (
    <div className="updateInfoInputContainer">
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Phone Number
          </Form.Label>
          <Col sm={3} className="inputFieldProfile">
            <Form.Control type="phoneNumber" placeholder="Phone Number" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={3} className="inputFieldProfile">
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Full Name
          </Form.Label>
          <Col sm={3} className="inputFieldProfile">
            <Form.Control type="fullName" placeholder="Full Name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            New Password
          </Form.Label>
          <Col sm={3} className="inputFieldProfile">
            <Form.Control type="newPassword" placeholder="New Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Confirm New Password
          </Form.Label>
          <Col sm={3} className="inputFieldProfile">
            <Form.Control type="confirm" placeholder="Confirm New Password" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default InputArea;
