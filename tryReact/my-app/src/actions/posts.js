import axios from 'axios'

export const createPost = (data) => axios.post("http://127.0.0.1:8080/pos/menu", data)
export const getMenu = (data) => axios.get("http://127.0.0.1:8080/pos/menu")