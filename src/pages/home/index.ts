import Home_Desktop from "./Home";
import Home_Mobile from "./Home.Mobile";
import {sizeBasedComponent} from "../../utils";

const Home = sizeBasedComponent(Home_Desktop, Home_Mobile)

export default Home;