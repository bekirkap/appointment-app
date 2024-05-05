import React from 'react'
import AppiontmentList from '../components/AppiontmentList'
import Doctors from '../components/Doctors'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className=''>
    <div>Home</div>
    <AppiontmentList/>
    <Doctors/>
    </Container>
  )
}

export default Home