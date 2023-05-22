import React from "react";
import logements from '../components/logements.json';
import '../styles/LogementPageProduit.css';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel'; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToggleButton from "../components/ToggleButton";
import ToggleButton1 from "../components/ToggleButton1";
import '../styles/Propos.css';


function Product() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);
  
  const rating = Number(logement.rating);
  
  if (!logement) {
    return null;
  }
  
  

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
                      {logement.tags.map((tag, index) => (
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
                    {[...Array(5)].map((star, i) => {
                      const starValue = i + 1;
                  
        return (
          <i key={i} className={`fa fa-star ${starValue <= rating ? "text-red" : "text-grey"}`}
          
              ></i>
              );
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
            <ToggleButton1
              title="Equipments"
              textEquipment={logement.equipments.join(' , ')}
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