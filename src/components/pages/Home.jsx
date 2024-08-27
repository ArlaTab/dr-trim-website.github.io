import Cards from '../Cards';
import '../../App.css'
import HeroSection from '../HeroSection'
import Carousel from '../Carousel';
import Footer from '../Footer';




function Home () {
    return (
        <>
            <HeroSection />
            <Carousel />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;