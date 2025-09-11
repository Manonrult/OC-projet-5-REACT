import '../../sass/Components/Logement/LogementCard.scss';
import { Link } from 'react-router-dom';

function LogementCard({ logement }) {
  const { cover, title, id } = logement;
  return (
    <article className="card">
      <Link to={`/housing/${id}`}>
        <img src={cover} alt={title} />
        <h2> {title} </h2>
      </Link>
    </article>
  );
}
export default LogementCard;
