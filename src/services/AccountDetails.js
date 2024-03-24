import { httpClient } from "../utils/httpClient";

export const accountDetailsGet = () => {
    return httpClient.get("getAccountDetails");
}

export const accountDetailsPut = (data) => {
    return httpClient.put("putAccountDetails",data);
}