import { httpClient } from "../utils/httpClient";

export const UserDetailsGet = () => {
    return httpClient.get("getUserDetails");
}

export const UserDetailsPut = (data) => {
    return httpClient.put("putUserDetails",data);
}
export const OtherUserDetailsGet = (id) => {
    return httpClient.put(`getOtherUserDetails/${id}`)
}