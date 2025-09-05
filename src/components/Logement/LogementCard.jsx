import '../../sass/Components/Logement/LogementCard.scss'

function LogementCard({logement}){
    const { cover, title } = logement;
    return(
        <article className="card">
            <img src={cover} alt={title} />
            <h2> {title} </h2>
        </article>
    )
}
export default LogementCard;