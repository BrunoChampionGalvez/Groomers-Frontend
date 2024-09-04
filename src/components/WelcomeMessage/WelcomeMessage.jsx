import { useNavigate } from "react-router-dom"
import styles from "./WelcomeMessage.module.css"
import Swal from "sweetalert2"
import { useSelector } from "react-redux"

function WelcomeMessage() {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const handleOnClick = (event) => {
        event.preventDefault()
        if (user) {
            navigate("/turnos")
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: '¡Debes inicar sesión!',
                footer: `
            <a href="#" id="registerLink">Registrarme</a>
            <a href="#" id="loginLink" style="margin-left: 10px;">Iniciar Sesión</a>
          `,
                didOpen: () => {
                    const link1 = document.getElementById('registerLink');
                    const link2 = document.getElementById('loginLink');
    
                    if (link1) {
                        link1.addEventListener('click', (e) => {
                            e.preventDefault();
                            Swal.close();
                            navigate("/register")
                        });
                    }
    
                    if (link2) {
                        link2.addEventListener('click', (e) => {
                            e.preventDefault();
                            Swal.close();
                            navigate("/login")
                        });
                    }
                },
            });
        }
        
    }

    return (
        <>
            <div className={styles.welcomeMessageContainer}>
                <div className={styles.titlePhraseContainer}>
                    <h1 className={styles.homeTitle}>Groomers:</h1>
                    <h2 className={styles.homePhrase}>Limpios, Aseados y Acariciados.</h2>
                </div>
                <button onClick={handleOnClick} className={styles.reserveButton}>Agenda una Cita</button>
            </div>
        </>
    )
}

export default WelcomeMessage