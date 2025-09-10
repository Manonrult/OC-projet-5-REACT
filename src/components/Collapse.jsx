import React, { useState } from 'react';
import '../sass/Components/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content }) {
  //ouverture-fermeture composant
  const [isOpen, setIsOpen] = useState(false);

  //inversion de l'état au clic
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={toggleCollapse}>
        <h2 className="collapse__title">{title}</h2>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse__arrow ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
        <div className="collapse__inner">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
