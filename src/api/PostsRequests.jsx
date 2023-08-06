import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
  
//     return req;
//   })

export const fetchTimelinePosts= ()=> API.get(`/posts`);
// export const fetchTimelinePosts= (id)=> API.get(`/posts/${id}/timeline`);
export const fetchPostsByUser= (id)=> API.get(`/posts/user/${id}`);
export const likePost=(id, userId)=> API.put(`/posts/${id}/like`, {userId: userId});
export const commentPost=(id, userComment)=> API.put(`/posts/${id}/comment`, userComment);