import axios from 'axios'

// Base axios instance
export const http = axios.create({
  baseURL: 'http://vuejs-demo.local/api/'
})
