import NavItem from "./NavItem/NavItem"
import logo from "../../assets/logo-groomers.png"
import styles from "./NavBar.module.css"
import { Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../../redux/reducer"

const NavBar = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(addUser(null))
    }

    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles['navitems-container']}>
                    <li><Link to="/" className={styles.logo}><img src={logo} alt="logo" /></Link></li>
                    <NavItem className={styles['nav-item']} text="Inicio" to="/"></NavItem>
                    <NavItem className={styles['nav-item']} text="Sobre Nosotros" to="/about"></NavItem>
                    {user && Object.keys(user).length > 0 && (
                        <NavItem className={styles['nav-item']} text="Mis Turnos" to="/turnos"></NavItem>
                    )}
                </ul>
                <div className={styles['register-login-container']}>
                    {!user && <NavItem className={`${styles['nav-item']} ${styles.register}`} text="Registrarme" to="/register"></NavItem>}
                    {!user && <NavItem className={`${styles['nav-item']} ${styles.login}`} text="Iniciar Sesión" to="/login"></NavItem>}
                    {user && <NavItem handleLogOut={handleLogOut} className={`${styles['nav-item']} ${styles.login}`} text="Cerrar Sesión" to="/"></NavItem>}
                </div>
            </nav>
        </>
    )
}

export default NavBar