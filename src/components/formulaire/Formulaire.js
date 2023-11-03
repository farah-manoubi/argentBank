import style from "./formulaire.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export const Formulaire = () =>{
    return(
        <>
            <section className={style.signInContent}>
                <FontAwesomeIcon icon={faCircleUser} className={style.signInicon} />
                <h1>Sign In</h1>
                <form>
                    <div className={style.inputWrapper}>
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className={style.inputWrapper}>
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className={style.inputRemember}>
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                <button className={style.signInButton}>Sign In</button>
                </form>
            </section>

        </>
    )
}