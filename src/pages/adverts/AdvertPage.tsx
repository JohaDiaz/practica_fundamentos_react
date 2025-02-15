import { useParams } from "react-router-dom";
import Layout from "../../commponents/layout/Layout";

function AdvertPage(){
    const params = useParams();
    console.log(params)
    return <Layout title="Advert Detail">
        El detalle del anuncio va aquí
    </Layout>
}
export default AdvertPage;