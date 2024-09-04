import dog from "../assets/dog.jpg"
import styles from "./WelcomeImage.module.css"

function WelcomeImage() {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.dogImage} src={dog} alt="perro" />
        </div>
    )
}

export default WelcomeImage