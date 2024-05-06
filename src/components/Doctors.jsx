import React from 'react'
import { doctorData } from '../helpers/data'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
import Modal from "./Modal"

const Doctors = ({apps,setApps}) => {
  const [show, setShow] = useState(false);
  const[doctorName,setDoctorName]=useState("")
  const addAppointment = (newApps) =>{
    setApps(...apps,newApps)
  }  


  return (
    <Container className=' text-center g-5 '>
        <h2>Doctors</h2>
        <Row>
            {
                doctorData.map(doctor => <Col key={doctor.id} className=' m-4 '>
                <Image src={doctor.img} width={"200px"} height={"200px"} onClick={()=>{setShow(true);
                  setDoctorName(doctor.name)
                }}/>
                <h4>{doctor.name}</h4>
                <p>{doctor.dep}</p>
                </Col>)
            }
        </Row>
        <Modal show={show} handleClose={()=> setShow(false)} doctorName={doctorName} addAppointment={addAppointment}/>
    </Container>
  )
    
  
   
}

export default Doctors