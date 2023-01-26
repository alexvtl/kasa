import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './header.scss';

function Header() {
  return (
    <header>
      <Link to="/home">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <Link to="/home">ACCUEIL</Link>
        <Link to="/apropos">A PROPOS</Link>
      </nav>
    </header>
  );
}

export default Header;
