import { useState } from 'react';
import fleche from '../../assets/Vector.png';
import './carrousel.scss';

function Carrousel({ slides }) {
  const [currentIndex, setcurrentIndex] = useState(0);

  function gotoprevious() {
    const firstSlide = currentIndex === 0;
    firstSlide
      ? setcurrentIndex(slides.length - 1)
      : setcurrentIndex(currentIndex - 1);
  }

  function gotonext() {
    const lastSlide = currentIndex === slides.length - 1;
    lastSlide ? setcurrentIndex(0) : setcurrentIndex(currentIndex + 1);
  }
  return (
    <div
      className="carrousel"
      style={{ backgroundImage: `url(${slides[currentIndex]})` }}
    >
      <button
        className="carrousel_icon_before"
        src={fleche}
        alt="before-icon"
        onClick={gotoprevious}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
      <button
        className="carrousel_icon_next"
        src={fleche}
        alt="after-icon"
        onClick={gotonext}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </div>
  );
}

export default Carrousel;
