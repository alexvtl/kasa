import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './header.scss';

function Header() {
  return (
    <header>
      <div className="header_box">
        <Link to="/home">
          <img src={Logo} alt="logo" />
        </Link>
        <nav>
          <Link to="/home">ACCUEIL</Link>
          <Link to="/about">A PROPOS</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
