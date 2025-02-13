import { client } from "../../api/client";
import { Advert } from "../adverts/types";


const advertsUrl = "/v1/adverts"


export const getLatestAdverts = (): Promise<Advert[]> =>
    {  
        return client.get<Advert[]>(advertsUrl).then((response) => response.data);
        
    };

//export const createAdverts = async (advert: AdvertContent) => {
    //const response = await.post<Advert[]>(advertsUrl, advert);
    //return response.data;
//}