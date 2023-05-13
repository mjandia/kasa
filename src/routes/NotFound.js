import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <Header />
            <div className="background3">
            
            <h5>404</h5>
            <div className="noexist">Oops! La page que vous demandez n'existe pas</div>
            <div className="return"><Link to='/'>Retourner sur la page d’accueil</Link></div>
            </div>
            <Footer />
            </div>
            )
}