// src/pages/Contact.js

import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mt-5">
      <h2>Contact Us</h2>
      <p>Have questions or suggestions? Reach out to us!</p>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
        </Form.Group>

        <Button variant="primary" type="submit">Send</Button>
      </Form>
    </Container>
  );
}

export default Contact;
