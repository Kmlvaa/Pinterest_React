import { httpClient } from "../utils/httpClient";

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
    return httpClient.post("addPost",data);
}
export const deletePost = (id) => {
    return httpClient.delete(`deletePost/${id}`);
}