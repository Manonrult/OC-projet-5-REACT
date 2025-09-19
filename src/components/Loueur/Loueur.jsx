function Loueur({ name, picture }) {
  return (
    <div className="loueur">
      <p>{name}</p>
      <img src={picture} alt={`Photo de ${name}`} />
    </div>
  );
}
export default Loueur;
