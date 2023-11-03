import style from "./header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom"; 


export const Header = () =>{

    return (
        <nav className={style.mainNav}>
            <NavLink to="/" className={style.logo}>
                <img
                    className={style.image}
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={style.srOnly}>Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to="/SignIn" className={style.navItem}>
                    <FontAwesomeIcon icon={faCircleUser} className={style.icon} />
                    Sign In
                </NavLink>
            </div>
        </nav>
    ) 
}