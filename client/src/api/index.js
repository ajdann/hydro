import axios from 'axios';

const url = 'http://localhost:5000/posts';
const url2 = "http://localhost:5001/readings";
const parameterURL = "http://localhost:5001/parameters";


export const fetchPosts = () => axios.get(url);

export const fetchLatestReading = () => axios.get(`${url2}/latest`);

export const postParameters = (newParameters) => axios.put(parameterURL, newParameters)

export const getParameters = () => axios.post(parameterURL)

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

