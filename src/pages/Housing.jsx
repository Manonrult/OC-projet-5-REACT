import { useParams } from 'react-router-dom';
import data from '../data/donnees.json';
import LogementSlideshow from '../components/Logement/LogementSlideshow';
import ErrorPage from './ErrorPage';

function Housing() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  //gestion de l'erreur - logement non trouvé
  if (!logement) {
    return <ErrorPage />;
  }
  return (
    <div>
      <LogementSlideshow pictures={logement.pictures}></LogementSlideshow>
    </div>
  );
}
export default Housing;
