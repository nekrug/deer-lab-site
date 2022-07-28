import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <div>
      <h1 className="container py-4 px-3 mx-auto">DEER Lab - Development, Early Enrichment, and Resilience</h1>
      <Container className="p-3 container-md-9">
        <Container className="p-5 mb-4 bg-light rounded-3 col-md-9">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../assets/6-month-eeg.jpeg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../assets/child-stock-1.jpeg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../assets/child-stock-2.jpeg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </div>
  );
}

export default Home;