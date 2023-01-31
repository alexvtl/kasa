import { Link } from 'react-router-dom';
import './card.scss';

function Card({ id, title, cover }) {
  return (
    <Link className="Card" to={'/logements/' + id}>
      <img className="Card_cover" src={cover} alt={title} />
      <span className="Card_title">{title}</span>
    </Link>
  );
}

export default Card;
