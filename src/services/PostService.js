import { httpClient } from "../utils/httpClient";
const token = localStorage.getItem('token');

export const getPostDetails = (id) => {
    return httpClient.get(`getPostDetails/${id}`);
}
export const getAllPosts = () => {
    return httpClient.get("getAllPosts");
}
export const getPosts = () => {
    return httpClient.get("getPosts");
}
export const addPost = (data) => {
    return httpClient.post("addPost",data, {
        headers: {
            Accept: "multipart/form-data",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
}
export const deletePost = (id) => {
    return httpClient.delete(`deletePost/${id}`);
}