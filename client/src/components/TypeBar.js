import React,  {useContext} from 'react'
import { Context } from '../index'
import {Navbar, Nav, Button, Container, ListGroup} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'

const TypeBar = observer(() => {
  const {device} = useContext(Context)

  return (
  
<ListGroup>
    {
      device.types.map(type =>
          <ListGroup.Item 
          style={{cursor: 'pointer'}}
          active={type.id === device.selectedType.id}
          key={type.id}
          onClick={() => device.setSelectedType(type)}
          >{type.name}
          </ListGroup.Item>
      )
    }
</ListGroup>
  

  )
     
}) 



export default TypeBar