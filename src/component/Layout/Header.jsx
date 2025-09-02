import { NavLink } from 'react-router-dom';
import logo from'../../assets/LOGO.svg';
import '../../sass/layout.scss';

function Header(){
    return(
        <header className="header">
            <img src={logo} alt="Kasa logo" className="header__logo" />
            <nav className='header__nav'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavLink to='/Home'>Accueil</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to='/About'>A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header ;