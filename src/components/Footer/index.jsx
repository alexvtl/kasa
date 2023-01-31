import LogoFooter from '../../assets/LogoFooter.png';
import TextFooter from '../../assets/TextFooter.png';
import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <img className="footer_logo" src={LogoFooter} alt="logo Footer" />
      <img className="footer_text" src={TextFooter} alt="logo Footer" />
    </div>
  );
}

export default Footer;
