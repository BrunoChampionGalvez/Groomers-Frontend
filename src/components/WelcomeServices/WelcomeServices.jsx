import dog2 from "../../assets/dog2.jpg"
import styles from "./WelcomeServices.module.css"

function WelcomeServices() {
    return (
        <div className={styles.container}>
            <img className={styles.dog2} src={dog2} alt="perro" />
            <div className={styles.containerTitleServices}>
                <h2 className={styles.titleServices}>Servicios</h2>
                <div className={styles.containerServices}>
                    <h4 className={styles.service}>Baño y cepillado</h4>
                    <h4 className={styles.service}>Corte de pelo</h4>
                    <h4 className={styles.service}>Corte de uñas</h4>
                    <h4 className={styles.service}>Limpieza de oídos</h4>
                    <h4 className={styles.service}>Baño contra pulgas y garrapatas</h4>
                    <h4 className={styles.service}>Acondicionadores para piel irritada</h4>
                    <h4 className={styles.service}>Tratamiento de aromaterapia</h4>
                    <h4 className={styles.service}>Limpieza de glándulas anales</h4>
                </div>
            </div>
        </div>
    )
}

export default WelcomeServices