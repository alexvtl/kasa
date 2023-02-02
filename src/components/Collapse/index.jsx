import './collapse.scss';
import { useState } from 'react';
import fleche from '../../assets/fleche.png';

function Collapse({ title, texte }) {
  const [isOpen, setisOpen] = useState(false);
  return isOpen ? (
    <div className="collapse">
      <div className="collapse_title" onClick={() => setisOpen(false)}>
        {title}
        <button className="collapse_button_open">
          <img
            className="collapse_button_icon"
            src={fleche}
            alt="collapse button"
          />
        </button>
      </div>
      <div className="collapse_texte_box">
        <p>{texte}</p>
      </div>
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse_title" onClick={() => setisOpen(true)}>
        {title}
        <button className="collapse_button_close">
          <img
            className="collapse_button_icon"
            src={fleche}
            alt="collapse button"
          />
        </button>
      </div>
    </div>
  );
}

export default Collapse;
