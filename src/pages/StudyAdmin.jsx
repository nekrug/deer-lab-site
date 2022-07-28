import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import StudyAdminContainer from '../components/StudyAdminContainer';
import DeletedStudyAdminContainer from '../components/DeletedStudyAdminContainer';
import NewStudyContainer from '../components/NewStudyContainer';

// TODO: refactor StudyAdmin into a functional component
class StudyAdmin extends Component {
  // we have every single study here.
  // step 1: create an accordian with a single tab called studies
  // in it, we have all of the studies wrapped in a StudyAdminContainer component
  // The study admin component is a simple wrapper with 2 buttons - Delete and Update
  // step 2: There's a "New Study" button that opens a simple modal.
    // We need a "NewStudy" component that has a handful of inputs
      // Title
      // Description
      // image
        // this needs to provide a place to add an image
        // on submit, the image needs to be written to the file system 
        // and the image_source needs to be in the POST request
  // 
  
  populateSection(status, deleted = false) {
    const studies = [];
    if (!deleted) {
      status.forEach(el => {
        studies.push(
          <StudyAdminContainer 
            study = {el}
            deleteStudy={this.props.deleteStudy}
            updateStudy={this.props.updateStudy}
          >
          </StudyAdminContainer>
        );
      });
    }
    else {
      status.forEach(el => {
        studies.push(
          <DeletedStudyAdminContainer 
            study = {el}
            undeleteStudy={this.props.undeleteStudy}
          >
          </DeletedStudyAdminContainer>
        );
      });
    }
    return studies;
  }
  
  // TODO: When we have numbers, we can put them in the header using length of the appropriate prop.
  render() {
    console.log(this.props);
    console.log(this.props.research);
    const { draft, active, archived, deleted } = this.props.research;
    
    // Populate each accordian section
    const activeStudies = this.populateSection(active);
    const deletedStudies = this.populateSection(deleted, true);


    return (
      <Container>
        <NewStudyContainer/>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Drafts</Accordion.Header>
            <Accordion.Body>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Active ({active.length})</Accordion.Header>
            <Accordion.Body>
              {activeStudies}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Archived</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Deleted ({deleted.length})</Accordion.Header>
            <Accordion.Body>
              {deletedStudies}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    );
  }
}

export default StudyAdmin;