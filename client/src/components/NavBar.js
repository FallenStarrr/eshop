import React,  {useContext} from 'react'
import { Context } from '../index'
import {Navbar, Nav, Button, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts'
import {observer} from 'mobx-react-lite'
import {useHistory} from 'react-router-dom'


const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" variant="dark">
    <Container >
    <NavLink style={{ color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
    {user.isAuth ? 

    <Nav className="ml-auto"  style={{ color: 'white'}}>
      <Button 
      variant={'outline-light'} 
      onClick={() => history.push(ADMIN_ROUTE)}
      >
      Админ панель</Button>

      <Button 
      variant={'outline-light'} 
      className="ml-2"
       onClick={() => logOut()}>
       Выйти</Button>
    </Nav> 
    :
    <Nav className="ml-auto"  style={{ color: 'white'}}>
      <Button onClick={() => history.push(LOGIN_ROUTE)} variant={'outline-light'}>Авторизация</Button>
    </Nav> 

    }
    </Container>
    
  </Navbar>
  

  )
     
}) 



export default NavBar