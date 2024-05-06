import React, { useState } from 'react'
import AppiontmentList from '../components/AppiontmentList'
import Doctors from '../components/Doctors'
import { Container } from 'react-bootstrap'
import { appointmentData } from '../helpers/data'

const Home = () => {
  const [appointments, setAppoinments] = useState(appointmentData)
  console.log(appointments);
  return (
    <Container className=' text-center '>
    <div>Kaplan Hospital</div>
    <Doctors setApps={setAppoinments} apps={appointments}/>
    <AppiontmentList apps={appointments} setApps={setAppoinments}/>
    </Container>
  )
}

export default Home