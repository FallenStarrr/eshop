import React,  {useContext} from 'react'
import { Context } from '../index'
import {Navbar, Nav, Button, Container, ListGroup, Row, Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'

const BrandBar = observer(() => {
  const {device} = useContext(Context)

  return (
  
     <Row className="d-flex">

     {
       device.brand.map(brand => 
          <Card
          key={brand.id}
          className="p-3"
          >
              {brand.name}
          </Card>
       )
     }

     </Row>
  

  )
     
}) 



export default BrandBar