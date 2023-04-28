import '../styles/Nav.css'
import { Link } from "react-router-dom";

    const Navigation = () => {
    return (
        <nav className="nav">
                <Link to='/home'>Accueil</Link>
                <Link to='propos'>A Propos</Link>
        </nav>
    )
}

export default Navigation