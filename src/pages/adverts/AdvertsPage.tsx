import './AdverstPage.css';
import AdvertItem from './Adverts';
import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import { Advert } from "./types"
import Layout from '../../commponents/layout/Layout';
import { Link } from 'react-router-dom';

const EmptyList = () => (
    <div>
      <p>No hay anuncios disponibles</p>
      <button>Crea un anuncio</button>
    </div>
  );

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
        getAdverts(); // elimino para ver la vista sin adverts 
    },[]);
  
    return (
        <Layout title="Nuevos anuncios" >
            <div className="AdvertsPage">
                {adverts.length ?(
                <ul>
                    {adverts.map((advert) => (
                        <li key={advert.id}>
                            <Link to={`/advert/${advert.id}`}>
                            <AdvertItem advert = {advert}/>
                            </Link>
                        </li>
                        ))}
                </ul>
                ) : (
                    <EmptyList />
                )}
            </div>
        </Layout>
    );
}


export default AdvertsPage;