import React from 'react'
import '../styles/Header.css'
import Header from "./Header";
import Footer from "./Footer";
import Case from './Case';
import logements from './logements.json';


function Home() {
    return (
        <>
        <Header />
        <main>
            <div className="background">
            {logements.map((logement) => (
            <Case key={logement.id} content={logement} />
      ))}
                </div>
        </main>
        <Footer />
        </>
        ) 
}

export default Home