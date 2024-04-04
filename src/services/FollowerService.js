import { httpClient } from "../utils/httpClient";

export const getFollowers = (id) => {
    return httpClient.get(`getFollowers/${id}`);
}
export const addFollower = (id) => {
    return httpClient.post(`addFollower/${id}`);
}
export const unFollow = (id) => {
    return httpClient.delete(`unFollow/${id}`);
}
export const isUserFollowed = (id) => {
    return httpClient.get(`isUserFollowed/${id}`)
}