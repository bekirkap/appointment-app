import React from 'react'
import AppiontmentList from '../components/AppiontmentList'
import Doctors from '../components/Doctors'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className=' text-center '>
    <div>Home</div>
    <Doctors/>
    <AppiontmentList/>
    </Container>
  )
}

export default Home