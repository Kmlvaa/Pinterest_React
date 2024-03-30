import { httpClient } from "../utils/httpClient";

export const getFollowers = (id) => {
    return httpClient.get(`getFollowers/${id}`);
}
export const GetYourFollowers = () => {
    return httpClient.get(`getYourFollowers`);
}
export const addFollower = (id) => {
    return httpClient.post(`addFollower/${id}`);
}
export const unFollow = (id) => {
    return httpClient.delete(`unFollow/${id}`);
}