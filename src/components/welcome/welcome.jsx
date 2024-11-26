import styles from "./styles.module.css"
import logo from "./../../assets/logo.png"
import coffee from "./../../assets/coffee.png"

export default function Welcome(){
	return (
        <div className={styles.container}>
            <div className={styles.title}>Подписка для розничных клиентов</div>
            <img
                className={styles.logo}
                alt="logo"
                src={logo}
            />
            <div className={styles.subtitle}>Подписка на кофе</div>
            <img
                className={styles.coffee}
                alt="coffee"
                src={coffee}
            />
            <div className={styles.decoration}>
                <div className={styles.circle} />
                <div className={styles.line} />
            </div>
    
        </div>
    )
} 