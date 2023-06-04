import axios from "axios";

const API = axios.create({ baseURL: 'https://snapwave.vercel.app' });

export const fetchAuthUser = (email) => API.get(`/users?email=${email}`)
export const fetchUsers= () => API.get(`/users/all`);
export const fetchUser= (id) => API.get(`/users/${id}`);