import bannerback from '../../assets/BackgroundBannerdesktop.png';
import './banner.scss';

function Banner({ title }) {
  return (
    <div className="banner">
      <img className="banner_bckground" src={bannerback} alt="banner" />
      <h1 className="banner_txt">{title}</h1>
    </div>
  );
}

export default Banner;
