import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function NewStudyModal(props) { 
  console.log(props);

  const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    // return the value with the onChange function instead of setValue function
    return [ value, onChange ];
  };

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');

  const [ title, titleOnChange ] = useInput('');
  const [ description, descriptionOnChange ] = useInput('');
  const [ image, imageOnChange ] = useInput('');
  const { onHide, createStudy } = props;

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  
  const uploadFile = async (file, fileName) => {
    // console.log(file);
    // console.log(fileName);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    try {
      const res = await axios.post(
        "http://localhost:3000/uploadimage",
        formData, {
          headers: {'Access-Control-Allow-Origin': '*'}
        }
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };
  
  const newStudyOnClick = async (title, description, file, fileName) => {
    await uploadFile(file, fileName);
    await createStudy(title, description, fileName);
    onHide();
    console.log('new study created');
  };

  return (
 
    <Modal centered show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>New Study</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="createCharFields">
          <label htmlFor="title">Title:   </label>
          <input name="title" placeholder="New Study" value={title} onChange={titleOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="title">Description:  </label>
          <input name="title" placeholder="Your description here" value={description} onChange={descriptionOnChange} />
        </div>
        <form action="/action_page.php">
          <label htmlFor="img">Select image:</label>
          <input type="file" id="img" name="img" accept="image/*" value={image} onChange={saveFile}/>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <span>  </span>
        <Button variant="primary" onClick={() => newStudyOnClick(title, description, file, fileName)}>
          Create Study
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewStudyModal;