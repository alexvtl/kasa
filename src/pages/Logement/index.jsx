import { useParams } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import Carrousel from '../../components/Carrousel/carrousel.jsx';
import api from '../../Products/product.json';
import Tags from '../../components/Tags/tags.jsx';
import Rate from '../../components/Rate/rate.jsx';
import Collapse from '../../components/Collapse/index.jsx';
import Error from '../Error/index';
import './logement.scss';

function Logement() {
  const { id } = useParams();
  //const [Data, saveData] = useState([]);
  const foundLogement = api.find((logement) => {
    return logement.id === id;
  });

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
  const erreur = foundLogement === undefined || foundLogement === null;
  return erreur ? (
    <Error />
  ) : (
    <div className="logement">
      <Carrousel key={foundLogement.id} slides={foundLogement.pictures} />
      <div className="logement_info_box">
        <div className="logement_title">
          <h2 className="logement_title_h2">{foundLogement.title}</h2>
          <p className="logement_title_location">{foundLogement.location}</p>
          <div className="logement_tags_box">
            {foundLogement.tags.map((tag) => (
              <Tags key={tag} tagname={tag} />
            ))}
          </div>
        </div>

        <div className="logement_host_box">
          <Rate rating={foundLogement.rating} />
          <div className="logement_host_description">
            <p className="logement_host_description_name">
              <span>{foundLogement.host.name.split(' ')[0]}</span>
              <span>{foundLogement.host.name.split(' ')[1]}</span>
            </p>
            <img
              className="logement_host_description_picture"
              src={foundLogement.host.picture}
              alt={'picure of ' + foundLogement.host.name}
            />
          </div>
        </div>
        <div className="logement_description_box">
          <Collapse
            className="logement_description_collapse description"
            title="Description"
            texte={foundLogement.description}
          />
          <Collapse
            className="logement_description_collapse equipements"
            title="Équipements"
            texte={foundLogement.equipments.map((eqpmt) => (
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
    </div>
  );
}

export default Logement;
