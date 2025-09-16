import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import '../../../sass/Components/Logement/Fiche/LogementSlideshow.scss';

function LogementSlideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = pictures.length - 1;

  const goToNext = () => {
    setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
  };
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
  };

  return (
    <div className="slideshow-container">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {pictures.length > 1 && (
        <>
          <div className="slideshow-navigation">
            <button className="nav-button nav-prev" onClick={goToPrevious}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="nav-button nav-next" onClick={goToNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="pagination">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
}
export default LogementSlideshow;
