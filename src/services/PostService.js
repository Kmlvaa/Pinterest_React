import { httpClient } from "../utils/httpClient";

export const getPostDetails = (id) => {
    return httpClient.get(`getPostDetails/${id}`);
}
export const addPost = (data) => {
    return httpClient.put("addPost",data);
}
export const deletePost = (id) => {
    return httpClient.delete(`deletePost/${id}`);
}