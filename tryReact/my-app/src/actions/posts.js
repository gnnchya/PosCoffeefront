import axios from 'axios'

export const createPost = (data) => axios.post("http://127.0.0.1:8080/pos/menu", data)
export const getAllMenu = () => axios.get("http://127.0.0.1:8080/pos/menu")
export const putMenu = (data) => axios.put("http://127.0.0.1:8080/pos/menu", data)
export const addToCart = (data) => axios.post("http://127.0.0.1:8081/pos/cart", data)
export const getEachMenu = (id) => axios.get(`http://127.0.0.1:8080/pos/menu/${id}`)
