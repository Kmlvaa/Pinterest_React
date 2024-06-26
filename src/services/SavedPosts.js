import { httpClient } from "../utils/httpClient";

export const getSaveds = (id) => {
    return httpClient.get(`getSaveds/${id}`);
}
export const isPostSaved = (id) => {
    return httpClient.get(`isPostSaved/${id}`);
}
export const addSaved = (id) => {
    return httpClient.post(`addSaved/${id}`);
}
export const deleteSaved = (id) => {
    return httpClient.delete(`deleteSaved/${id}`);
}