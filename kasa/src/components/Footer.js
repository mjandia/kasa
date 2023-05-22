import '../styles/Footer.css'
import logofooter from '../image/logofooter.png'

function Footer() {
    return (
        <footer>
        <img src={logofooter} alt='' className='logofooter' />
        <div className='right'>© 2020 Kasa. All rights reserved</div>
        </footer>
    );

}

export default Footer