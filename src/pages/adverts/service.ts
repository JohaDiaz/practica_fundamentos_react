import { client } from "../../api/client";
import { Advert } from "../adverts/types";


const advertsUrl = "/v1/adverts";


export const getLatestAdverts = async (): Promise<Advert[]> =>
    {  
        const response = await client.get<Advert[]>(advertsUrl);
    return response.data;
        
    };

//export const createAdverts = async (advert: AdvertContent) => {
    //const response = await.post<Advert[]>(advertsUrl, advert);
   // return response.data;
//}