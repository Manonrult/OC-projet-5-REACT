import Banner from '../components/Banner/Banner.jsx';
import bannerImage from '../assets/banner-home.jpg';
import LogementCard from '../components/Logement/LogementContainer.jsx';

function Home(){
    return (
        <div>
            <Banner backgroundImage={bannerImage}>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <LogementCard />
        </div>
    )

}

export default Home 