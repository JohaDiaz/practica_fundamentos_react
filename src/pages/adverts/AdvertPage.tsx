import { useParams } from "react-router-dom";
import Layout from "../../commponents/layout/Layout";
import { useState, useEffect } from "react";
import { Advert } from "./types";
import { getAdvert } from "./service";

function AdvertPage(){
    const params = useParams();
    console.log(params)
    const [advert, setAdvert]= useState<Advert | null>(null);

    useEffect(() => {
        if (params.advertId){
            getAdvert(params.advertId).then((advert) => setAdvert(advert));
        }
    }, [params.advertId]);

    console.log([params.advertId])

    return (
        <Layout title="Advert Detail">
          {advert ? (
            <div>
              <h2>{advert.name}</h2>
              <p><strong>ID:</strong> {advert.id}</p>
              <p><strong>Tipo de operación:</strong> {advert.sale ? "Venta" : "Compra"}</p>
              <p><strong>Precio:</strong> ${advert.price}</p>
              <p><strong>Tags:</strong> {advert.tags.join(", ")}</p>
              {advert.photo && <img src={advert.photo} alt={advert.name} width="200" />}
            </div>
          ) : (
            <p>Advert Loading...</p>
          )}
        </Layout>
      );
}
export default AdvertPage;