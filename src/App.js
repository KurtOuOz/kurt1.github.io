import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImagesSlider from "./components/ImagesSlider";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plant from "./components/Plant";
import Rooms from "./components/Rooms";

function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Offers/>
            <Plant/>
            <Rooms/>
            <ImagesSlider/>
            <Footer/>
        </div>
    );
}

export default App;
