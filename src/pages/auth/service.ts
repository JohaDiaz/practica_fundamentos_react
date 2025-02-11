import { client } from "../../api/client";
import type { Credentials, Login } from "./types";

export const login = async (credentials: Credentials) => {
    const response = await client.post<Login>("/auth/login", credentials);
    console.log(response);
    return response.data;
    
};