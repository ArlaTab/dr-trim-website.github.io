import Cards from '../Cards';
import '../../App.css'
import HeroSection from '../HeroSection'
import Carousel from '../Carousel';
import Button from '../Button';



const Home = () => {
    return (
        <div>
            <HeroSection />
            <Button />
            <Carousel />
            <Cards />
        </div>
    );
};

export default Home;