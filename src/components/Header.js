import Navigation from "./Navigation";
import '../styles/Header.css'
import IMG from '../image/IMG.png'
import logo1 from '../image/logo1.png'

function Header() {
    return (
        <header>
        <h1><img src={logo1} alt='' className='logo1' /></h1>
        <Navigation/>
        <img src={IMG} alt='' className='logo' />
        
        </header>
    );
    

}

export default Header