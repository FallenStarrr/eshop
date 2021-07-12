import React,  {useContext} from 'react'
import { Context } from '../index'
import {Navbar, Nav, Button, Container, ListGroup, Row} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'
import DeviceItem from './DeviceItem'

const  DeviceList = observer(() => {
  const {device} = useContext(Context)

  return (
  
 <Row className="d-flex">
      {device.devices.map(device => <DeviceItem key={device.id} device={device}/> )}
 </Row>

  )
     
}) 



export default DeviceList