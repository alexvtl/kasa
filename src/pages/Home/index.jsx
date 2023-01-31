import Banner from '../../components/Banner/banner';
import Gallery from './Gallery/gallery';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Gallery />
    </div>
  );
}

export default Home;
