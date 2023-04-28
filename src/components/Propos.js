import React from 'react'
import Header from "./Header";
import Footer from './Footer';
import ToggleButton from './ToggleButton';
import '../styles/Propos.css';

function Propos() {
    return (
        <><Header />
        <main>
        <ToggleButton className='text' text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
        </main>
        <Footer />
        </>
    )
}

export default Propos