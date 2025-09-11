import Banner from '../components/Banner/Banner.jsx';
import bannerImage from '../assets/banner-home.jpg';
import LogementContainer from '../components/Logement/LogementContainer.jsx';

function Home() {
  return (
    <div>
      <Banner backgroundImage={bannerImage} bannerType="home">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <LogementContainer />
    </div>
  );
}

export default Home;
