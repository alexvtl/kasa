import { useParams } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import Carrousel from '../../components/Carrousel/carrousel.jsx';
import log from '../../Products/product.json';
import Tags from '../../components/Tags/tags.jsx';
import Rate from '../../components/Rate/rate.jsx';
import Collapse from '../../components/Collapse/index.jsx';
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
  console.log(foundlog.rating);
  return (
    <div className="logement">
      <Carrousel key={foundlog.id} slides={foundlog.pictures} />
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
        <Rate rating={foundlog.rating} />
        <div className="logement_host_description">
          <p className="logement_host_description_name">
            <span>{foundlog.host.name.split(' ')[0]}</span>
            <span>{foundlog.host.name.split(' ')[1]}</span>
          </p>
          <img
            className="logement_host_description_picture"
            src={foundlog.host.picture}
            alt={'picure of ' + foundlog.host.name}
          />
        </div>
      </div>
      <div className="logement_description_box">
        <Collapse
          className="logement_description_collapse description"
          title="Description"
          texte={foundlog.description}
        />
        <Collapse
          className="logement_description_collapse equipements"
          title="Équipements"
          texte={foundlog.equipments.map((eqpmt) => (
            <li
              className="logement_description_collapse_p"
              key={eqpmt.toString()}
            >
              {eqpmt}
            </li>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
