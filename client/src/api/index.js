import axios from 'axios';

const url_posts = 'http://localhost:5000/posts';
const url_reading = "http://localhost:5001/readings";
const url_params = "http://localhost:5001/parameters";


export const fetchPosts = () => axios.get(url_posts);

export const fetchLatestReading = () => axios.get(`${url_reading}/latest`);

export const getAllReadings = () => axios.get(`${url_reading}/all`);

export const postParameters = (newParameters) => axios.put(url_params, newParameters);

export const getParameters = () => axios.get(url_params);

export const createPost = (newPost) => axios.post(url_posts, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url_posts}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url_posts}/${id}`);

export const likePost = (id) => axios.patch(`${url_posts}/${id}/likePost`);

