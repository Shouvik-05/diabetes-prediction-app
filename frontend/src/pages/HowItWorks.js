// src/pages/HowItWorks.js

import React from "react";
import { Container } from "react-bootstrap";

function HowItWorks() {
  return (
    <Container className="mt-5">
      <h2>How It Works</h2>
      <ol>
        <li>You enter your health parameters (like Glucose, BMI, Age, etc.).</li>
        <li>The app sends this data to a Flask backend server.</li>
        <li>The backend loads a pre-trained SVM (Support Vector Machine) model.</li>
        <li>The model makes a prediction based on the input features.</li>
        <li>The result is sent back and displayed on the screen.</li>
      </ol>
    </Container>
  );
}

export default HowItWorks;
