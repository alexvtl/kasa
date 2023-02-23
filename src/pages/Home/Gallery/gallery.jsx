import { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import './gallery.scss';
import Loader from '../../../components/Loader/loader';

function Gallery() {
  const [datasave, setdatasave] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getData = () => {
    fetch('/Datas/data.json')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setdatasave(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="gallery">
      {datasave.map((logement) => (
        <Card
          key={`${logement.id}`}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
