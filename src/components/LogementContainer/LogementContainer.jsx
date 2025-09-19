import React, { useEffect, useState } from 'react';
import data from '../../data/logements.json';
import LogementCard from '../LogementCard/LogementCard';
import '../../sass/Components/Logement/LogementContainer.scss';

function LogementContainer() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    //récupération des données
    setLogements(data);
  }, []);

  return (
    <div className="logement-container">
      {logements.map((logement) => (
        <LogementCard key={logement.id} logement={logement} />
      ))}
    </div>
  );
}
export default LogementContainer;
