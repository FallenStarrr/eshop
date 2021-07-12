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
       device.brands.map(brand => 
          <Card
          style={{cursor: 'pointer'}}
          key={brand.id}
          className="p-3"
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          onClick={() => device.setSelectedBrand(brand)}
          >
              {brand.name}
          </Card>
       )
     }

     </Row>
  

  )
     
}) 



export default BrandBar