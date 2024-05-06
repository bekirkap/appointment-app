import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { TiDelete, TiTick } from 'react-icons/ti'

const AppiontmentList = ({apps,setApps}) => {




  return (
    <div>
      <h1>appointment list</h1>
      {
        apps?.length ? apps.map(({id,patient,day,consulted,doctor})=><Row key={id}>

            <Col>
            <h4>{patient}</h4>
            <h4>{doctor}</h4>
          
            </Col>
            <Col>
            <h4>{new Date(day).toLocaleDateString()}</h4>
            <h4>{new Date(day).toLocaleTimeString()}</h4>
          
            </Col>
            <Col>
            <h4><TiDelete/></h4>
            <h4><TiTick/></h4>
          
            </Col>

        </Row>) : <img src="./img./appointment.jpg" alt="" />
      }


    </div>
  )
}

export default AppiontmentList