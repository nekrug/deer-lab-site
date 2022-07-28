import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Study from './Study';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeletedStudyAdminContainer(props) {
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
        <Col md={{span: 4, offset: 6}}></Col>
        <Col>
          <Button className="border px-2" onClick={() => props.undeleteStudy(id)} variant="outline-danger">Undelete</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default DeletedStudyAdminContainer;