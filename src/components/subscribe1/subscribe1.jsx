import styles from "./styles.module.css"
import first from "./../../../public/first.png"


export default function Subscribe1({white, title, price, old}){
	return(
		<div className={styles.container}>
			<div className={styles.white}>{white}</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.price}>
				<div className={styles.new}>{price}</div>
				<div className={styles.old}>{old}</div>
			</div>
			<div className={styles.way}>
				Способ приготовления
				<div className={styles.image}>
					<img
					alt="способы приготовления"
					src={first}
					style={{
						width: "140px",
                        height: "40px",
					}}
					/>
				</div>
			</div>
			<div className={styles.power}>
					Степень обжаривания
				<div className={styles.cont}>
					<div className={styles.left}>
						средняя
						<div className={styles.espresso}>ESPRESSO</div>
					</div>
					<div className={styles.right}>
						светлая
					<div className={styles.espresso}>ESPRESSO</div>
					</div>
				</div>
			</div>
			<div className={styles.grams}>
				<div className={styles.left2}>250 гр.</div>
				<div className={styles.right2}>250 гр.</div>
			</div>
			<div className={styles.facts}>
				<div className={styles.fact}>
					<div className={styles.dot}></div>
					Понятный
				</div>
				<div className={styles.fact}>
					<div className={styles.full}></div>
					Плотный
				</div>
				<div className={styles.fact}>
					<div className={styles.full}></div>
					Деликатный
				</div>
				<div className={styles.fact}>
					<div className={styles.full}></div>
					Сочный 
				</div>
				<div className={styles.fact}>
					<div className={styles.dot}></div>	
					Яркий
				</div>
				<div className={styles.fact}>
					<div className={styles.dot}></div>	
					Эксклюзивный
				</div>
				<div className={styles.fact}>
					<div className={styles.dot}></div>	
					Для чемпионов
				</div>
				<div className={styles.fact}>
					<div className={styles.dot}></div>	
					Выдающиеся ноты
				</div>	
			</div>
		</div>
	)
}