import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
  
//     return req;
//   });

export const fetchTimelinePosts= (id)=> API.get(`/posts/${id}/timeline`);
export const fetchMyPosts= (id)=> API.get(`/posts/${id}/me`);
export const likePost=(id, userId)=>API.put(`posts/${id}/like`, {userId: userId})