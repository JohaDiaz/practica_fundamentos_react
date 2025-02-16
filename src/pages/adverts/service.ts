import { client } from "../../api/client";
import { Advert, CreateAdvertContent } from "../adverts/types";


const advertsUrl = "/v1/adverts";


export const getLatestAdverts = async (): Promise<Advert[]> =>
    {  
        const response = await client.get<Advert[]>(advertsUrl);
    return response.data;
        
    };

export const createAdvert = async (advert: CreateAdvertContent) => {
    const response = await client.post<Advert[]>(advertsUrl, advert);
    return response.data;
}

export const getAdvert = async (id: string) => {
  const url = `${advertsUrl}/${id}`;
  const response = await client.get<Advert>(url);
  return response.data;
  
};

export const deleteAdvert = async (id: string) => {
    const url = `${advertsUrl}/${id}`;
    const response = await client.delete(url);
    return response.data;
  };