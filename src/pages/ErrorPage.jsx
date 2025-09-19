import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups, la page que vous cherchez n'existe pas.</p>
      <Link to="/" className="error-page-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;
