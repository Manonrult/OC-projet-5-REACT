import React, { useState, useRef, useEffect } from 'react';
import Banner from '../components/Banner/Banner.jsx';
import bannerImage from '../assets/banner-about.jpg';
import Collapse from '../components/Collapse.jsx';
import '../sass/Pages/about.scss';

// Données pour les sections "Collapse"
const aboutData = [
  {
    id: '1',
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    id: '2',
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    id: '3',
    title: 'Service',
    content:
      'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
  },
  {
    id: '4',
    title: 'Sécurité',
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function About() {
  const [openCollapses, setOpenCollapses] = useState([]);
  const [maxHeight, setMaxHeight] = useState('0px');
  const collapseRefs = useRef({});

  const handleToggle = (id) => {
    setOpenCollapses((prevOpenCollapses) => {
      if (prevOpenCollapses.includes(id)) {
        return prevOpenCollapses.filter((openId) => openId !== id);
      }

      return [...prevOpenCollapses, id];
    });
  };

  useEffect(() => {
    if (openCollapses.length > 0) {
      const heights = aboutData.map((item) => {
        const ref = collapseRefs.current[item.id];
        return ref ? ref.scrollHeight : 0;
      });
      const newMaxHeight = Math.max(...heights);
      setMaxHeight(`${newMaxHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [openCollapses]);

  return (
    <div>
      <Banner backgroundImage={bannerImage} bannerType="about" />
      <div className="about__collapses">
        {aboutData.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            content={item.content}
            isOpen={openCollapses.includes(item.id)}
            onToggle={() => handleToggle(item.id)}
            syncHeight={maxHeight}
            ref={(el) => {
              if (el) {
                collapseRefs.current[item.id] =
                  el.querySelector('.collapse__inner');
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
