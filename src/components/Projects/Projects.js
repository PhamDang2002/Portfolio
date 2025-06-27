import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';

import bitsOfCode from '../../Assets/Projects/blog.png';

import emotion from '../../Assets/Projects/emotion.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Zalando Application  "
              description="Zalando Application is a web application that allows users to browse and purchase products from Zalando with AI chatbot help customer service. It is built with React.js, Material-UI, and Redux Toolkit, Tailwind CSS. It has features which allows user for realtime filtering, sorting, searching products, buy products, add to cart, checkout, and order tracking."
              ghLink="https://github.com/PhamDang2002/Zalando-App"
              demoLink="https://shoppe-app-phi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="We Connect Application"
              description="We Connect Application is a web application that allows users to find courses and learn new skills, whethever they are beginner or expert, students, teachers, or workers. It is built with React.js, Material-UI, and Tailwind CSS, Redux Toolkit, and built API with Node.js, Express, and MongoDB. It has features which allows user for realtime filtering, sorting, searching courses, buy courses, checkout, and more."
              ghLink="https://github.com/PhamDang2002/E-Learning-Beauty"
              demoLink="https://e-learning-beauty.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Movie Application"
              description="Movie Application is a web application that allows users to browse and watch movies popular in the world. It is built with React.js, Tailwind CSS. It has features which allows user for realtime filtering, sorting, searching movies, watch movies, and more."
              ghLink="https://github.com/PhamDang2002/Movie-App"
              demoLink="https://big-boy-food.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Big Boy Food Application"
              description="Big Boy Food Application is a web application that allows users to browse and purchase food from Big Boy Food and admin can manage the food, orders, and employees. It is built with Next.js, Tailwind CSS, and Shadcn UI and built API with Node.js, Fastify, and SQLite. It has features which allows user for order food with QR code, checkout, and more."
              ghLink="https://github.com/PhamDang2002/Big-boy-food"
              demoLink="https://big-boy-food.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
