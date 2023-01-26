import bannerback from '../../assets/bannerbackground.png';
import './banner.scss';

function Banner() {
  return (
    <div className="banner">
      <img className="banner_bckground" src={bannerback} alt="banner" />
      <h1 className="banner_txt">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
