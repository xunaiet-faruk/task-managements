import Banner from "../Banner/Banner";
import Benefits from "../Benefit/Benefits";
import Fotter from "../Fotter/Fotter";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Benefits/>
            <Fotter/>
        </div>
    );
};

export default Home;