import { Link } from 'react-router-dom';
import errorLogo from '../../assets/404.png';
import './error.scss';
function Error() {
  return (
    <div className="error">
      <img src={errorLogo} className="error_img" alt="error_img" />
      <p className="error_txt">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="error_link" to="/home">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
