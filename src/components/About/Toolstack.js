import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiWindows,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="/cursor.svg" alt="ChatGPT" className="ortherimage" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="/chatgpt.svg" alt="ChatGPT" className="ortherimage" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="/claude.svg" alt="ChatGPT" className="ortherimage" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="/github-copilot-icon.svg"
          alt="ChatGPT"
          className="ortherimage"
        />
      </Col>
    </Row>
  );
}

export default Toolstack;
