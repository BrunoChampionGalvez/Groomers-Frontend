import NavBar from "../../components/NavBar/NavBar";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import WelcomeServices from "../../components/WelcomeServices/WelcomeServices";
import WelcomeImage from "../../components/WelcomeImage"
import styles from "./Home.module.css"
import { useSelector } from "react-redux";

const Home = () => {
    return (
        <>
            <main>
                <WelcomeMessage />
                <WelcomeServices/>
            </main>
        </>
    )
}

export default Home;