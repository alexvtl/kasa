import { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import './gallery.scss';

function Gallery() {
  const [datasave, setdatasave] = useState([]);
  const getData = () => {
    fetch('/Datas/data.json')
      .then((response) => response.json())
      .then((data) => {
        setdatasave(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="gallery">
      {datasave.map((logement, index) => (
        <Card
          key={`${logement.id}+${index}`}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
