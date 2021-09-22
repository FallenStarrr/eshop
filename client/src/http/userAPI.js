import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async (email , password) => {
  const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'}) 
  localStorage.set('token', data.token)
  return jwt_decode(data.token)
}


export const login = async (email , password) => {
  const {data} = await $host.post('api/user/login', {email, password}) 
  localStorage.set('token', data.token)
  return jwt_decode(data.token)
}



export const check = async () => {
  const {data} = await $authHost.get('api/user/auth') 
  localStorage.set('token', data.token)
  return jwt_decode(data.token)
}