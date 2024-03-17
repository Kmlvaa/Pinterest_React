import { httpClient } from "../utils/httpClient";

export const loginPost = (data) => {
    return httpClient.post("login", data);
  };

export const registerPost = (data) => {
    return httpClient.post("register", data);
}
