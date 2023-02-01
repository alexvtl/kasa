import { useParams } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import Carrousel from '../../components/Carrousel/carrousel.jsx';
import log from '../../Products/product.json';
import Tags from '../../components/Tags/tags.jsx';
import './logement.scss';

function Logement() {
  const { id } = useParams();
  //const [Data, saveData] = useState([]);
  const foundlog = log.find((logement) => {
    return logement.id === id;
  });
  console.log(foundlog);
  console.log(id);

  //useEffect(() => {
  //const Apilogement = () => {
  //fetch('/Datas/data.json')
  // .then((res) => res.json())
  // .then((data) => {
  //   saveData(data);
  //const array = Data.filter((element) => element.id === id);
  //  });
  // };
  // Apilogement();
  //  }, []);

  return (
    <div className="logement">
      <Carrousel slides={foundlog.pictures} />
      <div className="logement_title">
        <h2 className="logement_title_h2">{foundlog.title}</h2>
        <p className="logement_title_location">{foundlog.location}</p>
      </div>
      <div className="logement_tags_box">
        {foundlog.tags.map((tag) => (
          <Tags key={tag} tagname={tag} />
        ))}
      </div>
      <div className="logement_host_box">
        <div className="logement_host_stars"></div>
        <div className="logement_host_description">
          <p className="logement_host_description_name">
            {foundlog.host.name.split(' ')[0]}
            <br />
            {foundlog.host.name.split(' ')[1]}
          </p>
          <img
            className="logement_host_description_picture"
            src={foundlog.host.picture}
            alt={'picure of ' + foundlog.host.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Logement;
