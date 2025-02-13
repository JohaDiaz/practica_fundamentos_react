import { client,  removeAuthorizationHeader,  setAuthorizationHeader} from "../../api/client";
import storage from "../../utils/storage";
import type { Credentials, Login } from "./types";

export const login = async (credentials: Credentials) => {

    console.log("Enviando datos:", credentials);

    const response = await client.post<Login>("/auth/login", credentials);
    const { accessToken } = response.data;
    storage.set("auth", accessToken);
    setAuthorizationHeader(accessToken);
   
    console.log("Response: ", response)
    console.log("Datos de la API: ", response.data)
   
    if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        console.log("Token almacenado:", response.data.accessToken);
    } else {
        console.error("Error: No se recibió un accessToken.");
    }
    return response.data;
    
};

export const logout = async () => {
    storage.remove("auth");
    removeAuthorizationHeader();
}