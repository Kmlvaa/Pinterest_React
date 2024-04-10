import { httpClient } from "../utils/httpClient";
let token = localStorage.getItem("token")

export const UserDetailsGet = () => {
    return httpClient.get("getUserDetails");
}

export const UserDetailsPut = (data) => {
    return httpClient.put("putUserDetails",data, {
        headers: {
            Accept: "multipart/form-data",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
        }
    });
}
export const OtherUserDetailsGet = (id) => {
    return httpClient.get(`getOtherUserDetails/${id}`)
}
export const GetUsers = () => {
    return httpClient.get("getUsers");
}
export const DeleteUsers = (id) => {
    return httpClient.delete(`deleteUser/${id}`)
}
export const GetAdminDetails = () => {
    return httpClient.get('getAdminDetails')
}
export const SearchResult = (input) => {
    return httpClient.get("searchUsers", input)
}