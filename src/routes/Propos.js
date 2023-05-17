import React from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ToggleButton from '../components/ToggleButton';
import '../styles/Propos.css';
import '../styles/Global.css';


function Propos() {
    return (
        <>
        <div className="container">
        <Header />
        <Banner />
        <main>
            <div className="backgroundPropos">
                <div className="propos-item">
            <ToggleButton
                title="Fiabilité"
                text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                 />
                </div>
            </div>
            <div className="backgroundPropos1">
            <div className="propos-item">
                <ToggleButton
                title="Respect"
                text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                 />
            </div>
            </div>
            <div className="backgroundPropos1">
            <div className="propos-item">
            <ToggleButton
                title="Service"
                text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                 />
                </div>
            </div>
            <div className="backgroundPropos1">
            <div className="propos-item">
            <ToggleButton
                title="Sécurité"
                text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                 />
               </div> 
            </div>
        </main>
        <Footer />
        </div>
        </>
    )
}

export default Propos