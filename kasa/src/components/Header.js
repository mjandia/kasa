import '../styles/Header.css'
import logo1 from '../image/logo1.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header><Link to='/'>
            <img src={logo1} alt='' className='logo1' /></Link>
            <nav className="nav">
                <Link to='/'>Accueil</Link>
                <Link to='/propos'>A Propos</Link>
        </nav>
              
        </header>
    );
    

}

export default Header