import React from 'react'
import { Button, Card, Container, Form, FormControl, Row} from 'react-bootstrap'
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { NavLink, useLocation } from 'react-router-dom'

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        
        
        >
        <Card style={{width: 600}} className='p-5'>
           <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>

           <Form className="d-flex flex-column">

            <FormControl
                className="mt-3"
                placeholder="Введите ваш email"
            />
            <FormControl
                className="mt-3"
                placeholder="Введите ваш пароль"
            />
                <Row className="d-flex justify-content-between mt-3 flex-column pl-4">
                {
                    isLogin ?  <div>Нет аккаунта? 
                       <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                    </div> 
                    :
                    <div>Есть аккаунт? 
                       <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                    </div>

                }
                   
                  <Button className="mt-3">{isLogin ? 'Войти' : 'Регистрация'}</Button>

                </Row>
           

          </Form>
        </Card>
       
        </Container>
                
        
    )
}


export default Auth