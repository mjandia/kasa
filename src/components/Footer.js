import '../styles/Footer.css'
import logofooter from '../image/logofooter.png'

function Footer() {
    return (
        <footer>
        <h2><img src={logofooter} alt='' className='logofooter' /></h2>
        <div className='right'>© 2020 Kasa. All rights reserved</div>
        </footer>
    );

}

export default Footer