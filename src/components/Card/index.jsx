import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
    <Link className="Card" to={'/logement' + id}>
      <img className="Card_picture" src={cover} alt={title} />
      <span className="Card_title">{title}</span>
    </Link>
  );
}

export default Card;
