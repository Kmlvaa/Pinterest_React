import { httpClient } from "../utils/httpClient";

export const UserDetailsGet = (id) => {
    return httpClient.get(`userDetails${id}`);
}

export const UserDetailsPut = (id, data) => {
    return httpClient.put(`userDetails${id}`,data);
}