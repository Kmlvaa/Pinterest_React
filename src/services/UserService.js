import { httpClient } from "../utils/httpClient";
let token = localStorage.getItem("token")

export const UserDetailsGet = () => {
    return httpClient.get("getUserDetails");
}

export const UserDetailsPut = (data) => {
    return httpClient.put("putUserDetails",data, {
        headers: {
            Accept: "multipart/form-data",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
}
export const OtherUserDetailsGet = (id) => {
    return httpClient.get(`getOtherUserDetails/${id}`)
}