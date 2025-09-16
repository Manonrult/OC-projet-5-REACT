import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons'; // Importe l'étoile pleine
import '../../../sass/Components/Logement/Fiche/Rating.scss';

function Rating({ rating }) {
  const totalStars = 5;
  const starsArray = [];
  const starColor = '#FF6060'; // Couleur des étoiles pleines
  const emptyColor = '#E3E3E3'; // Couleur des étoiles "vides"

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      starsArray.push(
        <FontAwesomeIcon
          key={i}
          icon={solidFaStar}
          style={{ color: starColor }}
        />
      );
    } else {
      starsArray.push(
        <FontAwesomeIcon
          key={i}
          icon={solidFaStar}
          style={{ color: emptyColor }}
        />
      );
    }
  }
  return <div className="rating">{starsArray}</div>;
}
export default Rating;
