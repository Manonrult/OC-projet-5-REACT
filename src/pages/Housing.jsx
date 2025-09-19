import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logements.json';
import LogementSlideshow from '../components/LogementSlideshow/LogementSlideshow.jsx';
import ErrorPage from './ErrorPage';
import Loueur from '../components/Loueur/Loueur.jsx';
import Tag from '../components/Tags/Tag.jsx';
import Rating from '../components/Rating/Rating.jsx';
import Collapse from '../components/Collapse/Collapse.jsx';

import '../sass/Components/Logement/Fiche/Housing.scss';
import '../sass/Components/Logement/Fiche/Tag.scss';
import '../sass/Components/Logement/Fiche/Loueur.scss';

function Housing() {
  //Id récupéré dans l'URL
  const { id } = useParams();
  //Rechercher dans le tableau le logement
  const logement = data.find((item) => item.id === id);
  //Tableau d'état d'ouverture des collaps
  const [openCollapses, setOpenCollapses] = useState([]);
  //Hauteur max d'un collaps
  const [maxHeight, setMaxHeight] = useState('0px');
  //Références dans le DOM
  const descriptionRef = useRef(null);
  const equipmentsRef = useRef(null);

  //Fonction qui stock les collaps ouverts
  const handleToggle = (collapseId) => {
    setOpenCollapses((prevOpenCollapses) => {
      if (prevOpenCollapses.includes(collapseId)) {
        return prevOpenCollapses.filter((id) => id !== collapseId);
      }
      return [...prevOpenCollapses, collapseId];
    });
  };

  //Déclenché suite à une ouverture de collaps pour déterminer la hauteur
  useEffect(() => {
    if (openCollapses.length > 0) {
      if (maxHeight == '0px') {
        const descriptionHeight = descriptionRef.current
          ? descriptionRef.current.scrollHeight
          : 0;
        const equipmentsHeight = equipmentsRef.current
          ? equipmentsRef.current.scrollHeight
          : 0;

        let newMaxHeight = Math.max(descriptionHeight, equipmentsHeight);

        setMaxHeight(`${newMaxHeight}px`);
      }
    } else {
      setMaxHeight('0px');
    }
  }, [openCollapses, logement, maxHeight]);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <>
      <LogementSlideshow pictures={logement.pictures}></LogementSlideshow>
      <article className="fiche__logement">
        <div className="fiche__header">
          <div className="header__info">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <Tag tags={logement.tags} />
          </div>
          <div className="header__host">
            <Loueur name={logement.host.name} picture={logement.host.picture} />
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className="collapses__container">
          <Collapse
            title="Description"
            content={logement.description}
            // Check if the ID exists in the array
            isOpen={openCollapses.includes('description')}
            onToggle={() => handleToggle('description')}
            syncHeight={maxHeight}
            ref={descriptionRef}
          />
          <Collapse
            title="Équipements"
            content={logement.equipments}
            // Check if the ID exists in the array
            isOpen={openCollapses.includes('equipments')}
            onToggle={() => handleToggle('equipments')}
            syncHeight={maxHeight}
            ref={equipmentsRef}
          />
        </div>
      </article>
    </>
  );
}
export default Housing;
