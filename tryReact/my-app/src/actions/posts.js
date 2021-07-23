import axios from 'axios'

export const createPost = (data) => axios.post("localhost:8080/pos/menu")
export const getMenu = (data) => axios.get("localhost:8080/pos/menu")