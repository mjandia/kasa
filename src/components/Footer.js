import '../styles/Footer.css'
import logofooter from '../image/logofooter.png'

function Footer() {
    return (
        <footer>
        <h2><img src={logofooter} alt='' className='logofooter' /></h2>
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );

}

export default Footer