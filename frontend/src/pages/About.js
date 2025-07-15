// src/pages/About.js

import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <h2>About This Project</h2>
      <p>
        This diabetes prediction app is built using a machine learning model trained on health-related features like Glucose level, BMI, and Age.
      </p>
      <p>
        It allows users to input their medical data and get a prediction on whether they are likely to have diabetes.
      </p>
      <p>
        The frontend is built using React and Bootstrap, while the backend uses Flask and scikit-learn.
      </p>
    </Container>
  );
}

export default About;
