import axios from 'axios'
import {data} from '../pages/showMenu'

export const createPost = (data) => axios.post("http://127.0.0.1:8080/pos/menu", data)
export const getAllMenu = (limit,page) => axios.get(`http://127.0.0.1:8080/pos/menu?limit=${limit}&page=${page}`)
export const putMenu = (data) => axios.put("http://127.0.0.1:8080/pos/menu", data)
export const addToCart = (id,data) => axios.put(`http://127.0.0.1:8081/pos/cart/${id}`, data)
export const getEachMenu = (id) => axios.get(`http://127.0.0.1:8080/pos/menu/${id}`)
export const getCart = (id) => axios.get(`http://127.0.0.1:8080/pos/cart/${id}`)
export const FinishCart = (id,data) => axios.post(`http://127.0.0.1:8080/pos/cart/${id}/finish`,data)

