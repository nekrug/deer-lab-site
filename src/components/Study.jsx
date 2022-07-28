import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Study extends Component {
  // expects an image link, name, description, and ID
  render() {
    console.log(this.props.name);
    return (
      <Container className="bg-light py-4 px-3 m-4 border ">
        <Row>
          <Col md={3}>
            <img className="img-fluid" src={'../assets/' + this.props.imageSource}/>
          </Col>
          <Col md={9}>
            {/* <Row className="justify-content-center"><h2>Title</h2></Row> */}
            <h2 className="row justify-content-center">{this.props.title}</h2>
            <Row className="justify-content-center">{this.props.description}</Row>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 4, offset: 6}}></Col>
          <Col>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSd25CjdJKMNQtX4Gwupn5qCZ1WZsZflw9LJGUQhkhI62-WXng/viewform?usp=sf_link" target="_blank" md={{offset: 6}} variant="primary">Participate!</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Study;