import logo from'../../assets/LOGO-White.svg';

function Footer(){
    return(
        <footer className="footer">
            <img src={logo} alt="Kasa logo" className="footer__logo" />
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer ;