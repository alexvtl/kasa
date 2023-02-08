import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Carrousel from '../../components/Carrousel/carrousel.jsx';
import api from '../../Products/product.json';
import Tags from '../../components/Tags/tags.jsx';
import Rate from '../../components/Rate/rate.jsx';
import Collapse from '../../components/Collapse/index.jsx';
import './logement.scss';
import axios from 'axios';

function Logement() {
  const { id } = useParams();
  //const [Data, saveData] = useState([]);
  const foundLogement = api.find((logement) => {
    return logement.id === id;
  });
  const [daatta, savedata] = useState([]);

  useEffect(() => {
    //=> permet d'effectuer une action, ici une requête GET, à un moment donné du cycle de vie du composant
    const displayLocation = async () => {
      const result = await axios.get('/Datas/data.json'); //axios va me chercher l'Url, récupère les data sans besoin de convertir au format json
      const logement = result.data.find((item) => item.id === id);

      savedata(logement);
    };
    displayLocation();
    // eslint-disable-next-line
  }, []);

  console.log(daatta);

  return (
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
