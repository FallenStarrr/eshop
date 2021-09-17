import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { NavLink, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";


const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const click = async () => {
         if (isLogin) {
          const response = await login()
         } else {
            const response = await registration(email, password)
            console.log(response)
         }
        
        
  }



  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>

        <Form className="d-flex flex-column">
          <Form.Control 
          className="mt-3" 
          placeholder="Введите ваш email"
           value={email}
            onChange={e => setEmail(e.target.value)}
           />
          <Form.Control
          value={password} 
          className="mt-3" 
          placeholder="Введите ваш пароль" 
          onChange={e => setPassword(e.target.value)}
          type="password"
          />
          <Row className="d-flex justify-content-between mt-3 flex-column pl-4">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}

            <Button 
            onClick={click}
            variant={"outline-success"} 
            className="mt-3 align-self-end">
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
