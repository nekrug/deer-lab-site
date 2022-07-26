import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Study from './Study';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StudyAdminContainer(props) {
  const { id, name, description, image_source } = props.study;
  return (
    <Container className="m-1 border py-2">
      <Study 
        key = {'studyadmin' + id}
        id = {id}
        title = {name}
        description = {description}
        imageSource = {image_source}
      />
      <Row>
        <Col md={{span: 4, offset: 5}}></Col>
        <Col>
          <Button className="border px-2" onClick={() => props.deleteStudy(id)} variant="outline-danger">Delete</Button>
          <span>  </span>
          <Button className="border px-2" onClick={() => props.openStudyModal(props.study)} variant="outline-primary">Update</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default StudyAdminContainer;