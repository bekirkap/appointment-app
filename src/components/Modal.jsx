import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function Example({show, handleClose,doctorName}) {
    const [validated, setValidated] = useState(false);
    const [patientName, setPatientName]= useState("")
    const [date, setDate]= useState("")

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);};
      console.log(patientName,date,doctorName);
    

  return (
    <>

      <Modal show={show} onHide={handleClose} className=' text-center'>
        <Modal.Header closeButton>

          <Modal.Title>Appoinment for {doctorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3  ">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange={e=> setPatientName(e.target.value)}
            value={patientName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
   
   
      </Row>
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="datetime-local"
            placeholder="Last name"
            onChange={(e)=> setDate(e.target.value)}
            value={date}
            
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Appointment</Button>
    </Form>
        </Modal.Body>
     
      </Modal>
    </>
  );
}

export default Example;