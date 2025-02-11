import { client } from "../../api/client";
import { Advert } from "../adverts/types";

const advertsUrl = "/api/v1/adverts"


export const getLatestAdverts = (): Promise<Advert[]> =>
    {  
        return client.get<Advert[]>(advertsUrl).then((response) => response.data);
        
    };