import { httpClient } from "../utils/httpClient";

export const getLikes = (id) => {
    return httpClient.get(`getLikes/${id}`);
}
export const isPostLiked = (id) => {
    return httpClient.get(`isPostLiked/${id}`);
}
export const addLike = (id) => {
    return httpClient.post(`addLike/${id}`);
}
export const unLike = (id) => {
    return httpClient.delete(`unLike/${id}`);
}