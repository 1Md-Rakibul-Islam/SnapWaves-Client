import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5000'})

export const fetchMessages = (id) => API.get(`/messages/${id}`)