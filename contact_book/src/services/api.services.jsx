import axios from "axios";

export const apiRoute = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  maxBodyLength: Infinity,
});

export function setApiToken(token) {
  apiRoute.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export async function fetchLogin(data) {
  const result = await apiRoute.post("login", data);

  return result.data;
}

export async function fetchContact() {
  const result = await apiRoute("/contact");
  return result.data;
}

export async function fetchSaveContact(data) {
  const result = await apiRoute.post("/contact", data);
  console.log(result);
  return result;
}
