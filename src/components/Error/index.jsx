import { Link } from 'react-router-dom';
import ErrorLogo from '../../assets/404.png';

function Error() {
  return (
    <div>
      <img src={ErrorLogo} alt="error logo" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error;
