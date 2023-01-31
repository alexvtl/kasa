import fleche from '../../assets/Vector.png';
import './collapsebutton.scss';

function CollapseButton() {
  return (
    <button className="collapse_button">
      <img
        className="collapse_button_icon"
        src={fleche}
        alt="collapse button"
      />
    </button>
  );
}

export default CollapseButton;
