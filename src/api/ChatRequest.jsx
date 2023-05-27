import axios from "axios"

const API = axios.create({baseURL: 'http://localhost:5000'})

export const usersChats = (id) => API.get(`/chat/${id}`)