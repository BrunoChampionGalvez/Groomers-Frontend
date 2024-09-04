import styles from "./NavItem.module.css"
import { Link } from "react-router-dom"

const NavItem = ({ text, to, handleLogOut }) => {
    return (
        <>
            <li><Link onClick={handleLogOut} to={to} className={styles['nav-item']}>{text}</Link></li>
        </>
    )
}

export default NavItem