import { httpClient } from "../utils/httpClient";

export const getComments = (id) => {
    return httpClient.get(`getComments/${id}`);
}
export const addComment = (id, data) => {
    return httpClient.post(`addComment/${id}`,data);
}
export const deleteComment = (id) => {
    return httpClient.delete(`deleteComment/${id}`);
}