import './collapse.scss';
import CollapseButton from '../CollapseButton';
import { useState } from 'react';

function Collapse({ title, texte }) {
  const [isOpen, setisOpen] = useState(false);
  return isOpen ? (
    <div className="collapse" onclick={() => setisOpen(false)}>
      <p className="collapse_title">{title}</p>
      <CollapseButton />
      <p className="collapse_texte">{texte}</p>
    </div>
  ) : (
    <div className="collapse" onclick={() => setisOpen(true)}>
      <p className="collapse_title">{title}</p>
      <CollapseButton />
    </div>
  );
}

export default Collapse;
