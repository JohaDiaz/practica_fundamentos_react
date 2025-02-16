import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../commponents/layout/Layout";
import { useState, useEffect } from "react";
import { Advert } from "./types";
import { getAdvert, deleteAdvert } from "./service";

function AdvertPage(){
    const params = useParams();
    console.log(params)
    const navigate = useNavigate();
    const [advert, setAdvert]= useState<Advert | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (params.advertId){
            getAdvert(params.advertId).then((advert) => setAdvert(advert));
        }
    }, [params.advertId]);

    console.log([params.advertId])

    const handleDelete = async () => {
        if (advert) {
          try {
            await deleteAdvert(advert.id); 
            navigate("/advertsPage");  
          } catch (error) {
            setErrorMessage("Hubo un error al intentar borrar el anuncio. Intenta de nuevo más tarde.");
            console.error("Error deleting advert:", error);
          }
          setShowModal(false);
        }
      };
    
      const handleGoBack = () => {
        setErrorMessage(null);
        navigate("/advertsPage"); 
      };

      const openModal = () => setShowModal(true);  
      const closeModal = () => setShowModal(false); 
    
      return (
        <Layout title="Advert Detail">
          {advert ? (
            <div className="container mt-5">
              {/* Título del anuncio */}
              <div className="row mb-4">
                <div className="col-12 text-center">
                  <h2 className="display-4 text-primary">{advert.name}</h2>
                </div>
              </div>
    
              {/* Detalles del anuncio */}
              <div className="row mb-4">
                <div className="col-12 col-md-6">
                  <p><strong>ID:</strong> {advert.id}</p>
                  <p><strong>Tipo de operación:</strong> {advert.sale ? "Venta" : "Compra"}</p>
                  <p><strong>Precio:</strong> ${advert.price}</p>
                  <p><strong>Tags:</strong> {advert.tags.join(", ")}</p>
                </div>
    
                {/* Imagen del anuncio */}
                {advert.photo && (
                  <div className="col-12 col-md-6 text-center">
                    <img src={advert.photo} alt={advert.name} className="img-fluid rounded w-50" />
                  </div>
                )}
              </div>
    
              {/* Mostrar el mensaje de error si existe */}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    
              {/* Botones de borrar y volver */}
              <div className="d-flex justify-content-between container mt-5">
                <button onClick={openModal} className="btn btn-danger btn-xs">Borrar Anuncio</button>
                <button onClick={handleGoBack} className="btn btn-secondary btn-xs">Volver a Anuncios</button>
              </div>
    
              {/* Modal de confirmación */}
              {showModal && (
                <div className="modal fade show" tabIndex={-1} role="dialog" style={{ display: "block" }} aria-hidden="false">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Confirmar Borrado</h5>
                        <button type="button" className="close" onClick={closeModal} aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>¿Estás seguro de que deseas borrar este anuncio?</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-xs" onClick={closeModal}>Cancelar</button>
                        <button type="button" className="btn btn-danger btn-xs" onClick={handleDelete}>Aceptar</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>Advert Loading...</p>
          )}
        </Layout>
      );
    }
    
    export default AdvertPage;