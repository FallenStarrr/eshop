import axios from 'axios'


const $host = axios.create({
  baseUrl: 'http://localhost:5000/'
})


const $authHost = axios.create({
  baseUrl:  'http://localhost:5000/'
}) 


const authInterceptor = config => { 
  
  config.headear.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
 }

 $authHost.interceptors.request.use(authInterceptor)

 export {
   $host,
   $authHost
 }