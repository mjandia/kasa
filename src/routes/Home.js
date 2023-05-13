import React from 'react'
import '../styles/Header.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Case from '../components/Case';
import logements from '../components/logements.json';
import { Link } from 'react-router-dom';
import Banner from "../components/Banner"
import '../styles/Banner.css'

function Home() {
    return (
        <>
        <Header />
        <Banner />  
        <main>
            <div className="container">
            <div className="background">
            {logements.map((logement) => (
                 <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Case className="gallery-case"
            key={logement.id} content={logement} />
            </Link>
      ))}
                </div>
                </div>
        </main>
        <Footer />
        </>
        ) 
}

export default Home