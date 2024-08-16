import styles from "../components/formlogin.module.css";
import sura from "../img/sura.png"
import evi from "../img/evi.png"
export function FormLogin() {
    return (
        <>

            
<div className={styles.wrapper}>
    <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
            <img src={sura} alt="Logo Izquierda" className={styles.logoLeft} />
            <img src={evi} alt="Logo Derecha" className={styles.logoRight} />
        </div>
        <form className={styles.loginForm}>
            <div>
                <label htmlFor="username">USUARIO </label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">CLAVE </label>
                <input type="password" id="password" name="password" required />
            </div>
            <div>
                <button type="submit">INICIAR SESÍON</button>
            </div>
        </form>
    </div>

    <h3 className={styles.centeredText}>
        Sur América cerca de ti
    </h3>
</div>


          
        </>

    );
}