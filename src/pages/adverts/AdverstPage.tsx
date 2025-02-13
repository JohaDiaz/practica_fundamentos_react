import './AdverstPage.css';
import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import { Advert } from "./types"
import { logout } from "../auth/service" 



interface Props {
    onLogout: () => void
}

function AdvertsPage({ onLogout }: Props) {
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

    const handleLogoutClick = async () => {
        await logout();
        onLogout();
    };
  
    return (

    <div className="AdvertsPage">
        <h1>Página de Anuncios</h1>
        <ul>
            {adverts.map((advert) => (
                <li key={advert.id}>{advert.name}</li>
                ))}
        </ul>
        <button onClick={handleLogoutClick}>
                Log out
        </button>
    </div>
    );
}


export default AdvertsPage;