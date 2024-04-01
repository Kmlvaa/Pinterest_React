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
export const getUserPosts = (id) => {
    return httpClient.get(`getUserPosts/${id}`);
}
export const addPost = (data) => {
    return httpClient.post("addPost",data, {
        headers: {
            Accept: "multipart/form-data",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
        }
    });
}
export const deletePost = (id) => {
    return httpClient.delete(`deletePost/${id}`);
}
export const editPost = (id, data) => {
    return httpClient.put(`editPost/${id}`, data);
}