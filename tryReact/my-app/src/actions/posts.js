import axios from 'axios'

export const createPost = (data) => axios.post("localhost:8080/pos/menu")