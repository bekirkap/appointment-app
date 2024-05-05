import React from 'react'
import { doctorData } from '../helpers/data'
import { Container, Row, Col, Image } from 'react-bootstrap';

const Doctors = () => {
    console.log(doctorData);
    
  return (
    <Container className=' text-center g-5 '>
        <h2>Doctors</h2>
        <Row>
            {
                doctorData.map(doctor => <Col key={doctor.id} className=' m-4 ' >
                <Image src={doctor.img} width={"200px"} height={"200px"}/>
                <h4>{doctor.name}</h4>
                <p>{doctor.dep}</p>
                </Col>)
            }
        </Row>
    </Container>
  )
    
  
   
}

export default Doctors