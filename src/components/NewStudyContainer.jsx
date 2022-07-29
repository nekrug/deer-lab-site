import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewStudyModal from '../components/NewStudyModal';

function NewStudyContainer(props) {
  console.log(props);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Row className="py-2">
      <Col md={{span: 4, offset: 5}}></Col>
      <Col>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          New Study
        </Button>
      </Col>
      <NewStudyModal createStudy={props.createStudy} show={modalShow} onHide={() => setModalShow(false)}/>
    </Row>
  );
}

export default NewStudyContainer;