import { httpClient } from "../utils/httpClient";

export const getSaveds = (id) => {
    return httpClient.get(`getSaveds/${id}`);
}
export const getYourSaveds = (id) => {
    return httpClient.get(`getYourSaveds/${id}`)
}
export const addSaved = (id) => {
    return httpClient.post(`addSaved/${id}`);
}
export const deleteSaved = (id) => {
    return httpClient.delete(`deleteSaved/${id}`);
}