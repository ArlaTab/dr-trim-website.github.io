import Cards from '../Cards';
import '../../App.css'
import HeroSection from '../HeroSection'
import Carousel from '../Carousel';




const Home = () => {
    return (
        <div>
            <HeroSection />
            <Carousel />
            <Cards />
        </div>
    );
};

export default Home;