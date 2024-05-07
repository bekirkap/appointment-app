import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { TiDelete, TiTick } from 'react-icons/ti'

const AppiontmentList = ({apps,setApps}) => {

const handleDelete = (id) =>{
  setApps(apps?.filter(appo=> appo.id !== id))
}
const handleToggle = (id) =>{
  setApps(apps?.map(appo=> appo.id === id ? {...appo,consulted: !appo.consulted} : appo))
}

  return (
    <div>
      <h1>appointment list</h1>
      {
        apps?.length ? apps.map(({id,patient,day,consulted,doctor})=><Row key={id}  className={
          "appointments justify-content-between align-items-center mx-auto" +
          (consulted ? " consulted" : "")
        }>

            <Col>
            <h4>{patient}</h4>
            <h4>{doctor}</h4>
          
            </Col>
            <Col>
            <h4>{new Date(day).toLocaleDateString()}</h4>
            <h4>{new Date(day).toLocaleTimeString()}</h4>
          
            </Col>
            <Col>
            <h4><TiDelete type='button' onClick={()=> handleDelete(id)}/></h4>
            <h4><TiTick type='button' onClick={()=>handleToggle(id)}/></h4>
          
            </Col>

        </Row>) : <img src="./img./appointment.jpg" alt="" />
      }


    </div>
  )
}

export default AppiontmentList