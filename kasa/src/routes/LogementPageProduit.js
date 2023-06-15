import React, { useEffect } from "react"; /* le Hook useffect est appelé de même que REAct par REACT */
import logements from '../components/logements.json';
import '../styles/LogementPageProduit.css';
import { useParams, useNavigate } from 'react-router-dom'; /* useParams qui permet d'extraire les paramètres de l'id logement et useNavigate, pemret la navigation */ 
import Carousel from '../components/Carousel'; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToggleButton from "../components/ToggleButton";
import '../styles/Propos.css';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(logement => logement.id === id); /* find permet de trouver la fiche logement correspindant à l'id */ 
  
useEffect(() => { /* ici l'utilisation de useEffect comme hook permeet grâce à navigate de rediriger vers la page 404 en cas d'erreur */
  if (!logement) {
    navigate('/notfound', { replace: true });
  }
}, [logement, navigate]);

  if (!logement) { /* si pas de logement, est retourner une valeur nulle donc vers la page 404 */
    return null;
  }
  const rating = Number(logement.rating); /* Retourne un nombre pour le rating */
  
/* Affichage du carrousel d'images à partir du json logement. Ensuite sont indiqués les détails : propriétaire, mots clés, type de logement... */
  return (
    <>
    <div className="container">
      <Header />
    
      <div className="product">
        
        <Carousel slides={logement.pictures} /> 
          <div className="allDetail"> 
              <div className="appartment">
                  <p className="titleProduit">{logement.title}</p>
                  <p className="location">{logement.location}</p>
                    <ul className="tags">
                      {logement.tags.map((tag, index) => ( /* Ici le map créé un nouveau tableau qui va afficher 
                      une liste de tags en li à partir de la key qui s'appuie index + tags */
                        <li key={index}>{tag}</li>
                        ))}
                    </ul>
              </div>
              <div className="owner">
                  <div className="host">
                      <h4>{logement.host.name}</h4>
      
                      <img src={logement.host.picture} alt={logement.host.name} />
                  </div>
      
                  <div className="ratingcontainer">
                    {[...Array(5)].map((star, i) => { /*... Opérateur de décomposition qui calcule grâce à i le nombre d'étoile, 
                    il permet de décomposer une expression en plusieurs éléments individuels*/ /* fonction de rappel : ((star, i) => */
                      const starValue = i + 1;
                  
        return ( /* Une key est attribué à chaque élément de la liste */
          <i key={i} className={`fa fa-star ${starValue <= rating ? "text-red" : "text-grey"}`} /* StarValue dépend de rating, si inférieur alors alors tex-red est appliqué et vice-versa sinon c'est text gray */
          
              ></i>
              ); /* Est retourné un tableau avec notation ou rating avec des étoiles i étant l'index*/
            })}
            </div>
          </div>
        </div>
        <div className="propos-container">
          <div className="propos-item">
            <ToggleButton
              title="Description"
              text={logement.description}
              className="description"
            />
          </div>
        
          <div className="propos-item">
            <ToggleButton 
              title="Equipements"
              text={logement.equipments.join(' , ')}
              className="equipments"
            />
          </div>
        </div>
        
      </div>
        
        <Footer />
    </div>
        </>
  );
}
      
      export default Product;