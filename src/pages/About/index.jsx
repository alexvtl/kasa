import AboutCover from '../../assets/AboutCover.png';
import './about.scss';
import Collapse from '../../components/Collapse/index.jsx';

function About() {
  return (
    <div className="about">
      <section className="about_banner">
        <img
          className="about_banner_cover"
          src={AboutCover}
          alt="about cover"
        />
      </section>
      <Collapse
        key="fiabilty"
        title="Fiabilité"
        texte="bonjourjsjfnsijqnfdsjqn"
      />
    </div>
  );
}
export default About;
