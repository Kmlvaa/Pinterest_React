import { httpClient } from "../utils/httpClient";

export const getFollowers = (id) => {
    return httpClient.get(`getFollowers/${id}`);
}
export const addFollower = (id, data) => {
    return httpClient.put(`addFollower/${id}`,data);
}
export const unFollow = (id) => {
    return httpClient.delete(`unFollow/${id}`);
}