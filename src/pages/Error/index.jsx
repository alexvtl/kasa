import { Link } from 'react-router-dom';
import ErrorLogo from '../../assets/404.png';
import './error.scss';
function Error() {
  return (
    <div className="error">
      <img className="error_img" src={ErrorLogo} alt="error logo" />
      <p className="error_txt">
        Oups! La page que <br /> vous demandez n'existe pas.
      </p>
      <Link className="error_link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
