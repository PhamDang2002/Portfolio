import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Phạm Huy Đăng </span>
            from <span className="purple"> Di An, Binh Duong.</span>
            <br />
            I am currently fresher for frontend developer.
            <br />
            I have completed bachelor's degree in Information System at Nong Lam
            University, Ho Chi Minh City.
            <br />
            <br />
            Additional information:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Can work full time, no salary required.
            </li>
            <li className="about-activity">
              <ImPointRight /> Can work in Ho Chi Minh City, Binh Duong
            </li>
            <li className="about-activity">
              <ImPointRight /> Possess personal laptop for development
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Phạm Huy Đăng</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
