import './AdverstPage.css';
import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import { Advert } from "./types"
import Layout from '../../commponents/layout/Layout';


function AdvertsPage() {
    const [adverts, setAdverts] = useState<Advert[]>([]);

    useEffect(() => { 
        async function getAdverts(){
       
            try{
            const adverts = await getLatestAdverts();

            setAdverts(adverts);

        }catch(error){
            console.log(error)
        }
    }
        getAdverts();
    },[]);
  
    return (
        <Layout title="Nuevos anuncios" >
            <div className="AdvertsPage">
                <h1>Página de Anuncios</h1>
                <ul>
                    {adverts.map((advert) => (
                        <li key={advert.id}>{advert.name}</li>
                        ))}
                </ul>
            </div>
        </Layout>
    );
}


export default AdvertsPage;