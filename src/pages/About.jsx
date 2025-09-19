import React, { useState, useRef, useEffect } from 'react';
import Banner from '../components/Banner/Banner.jsx';
import bannerImage from '../assets/banner-about.jpg';
import Collapse from '../components//Collapse/Collapse.jsx';
import '../sass/Pages/about.scss';
import aboutData from '../data/about.json';

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
