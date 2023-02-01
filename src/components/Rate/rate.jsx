import './rate.scss';
import redstars from '../../assets/redstars.png';
import greystars from '../../assets/greystars.png';

function Rate({ rating }) {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="logement_host_stars">
      {range.map((nmb) =>
        rating >= nmb ? (
          <img
            className="logement_host_stars_red"
            key={nmb.toString()}
            src={redstars}
            alt="red"
          />
        ) : (
          <img
            className="logement_host_stars_grey"
            key={nmb.toString()}
            src={greystars}
            alt="grey"
          />
        )
      )}
    </div>
  );
}

export default Rate;
