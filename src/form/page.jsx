import styles from "./styles.module.css"
import { useState, useEffect } from "react"

import home from "./../../public/home2.png"
import { Link } from "react-router-dom"

export default function Form(){
	
	const WebApp = window.Telegram.WebApp

	useEffect(() => {
		WebApp.ready()

	},[])
	const [out, setOut] = useState("")

	WebApp.expand();

	function send(){
	const name = document.getElementById("name").value
	const contact = document.getElementById("contact").value

	let done = 0
	if(name != ""){
		done++
	}
	if(contact != ""){
		done++
	}

	if(done == 2){
		WebApp.sendData(`subscribe#${name}(${contact}) хочет оформить подписку на кофе`)
	} else {
		console.log("Все поля должны быть заполнены!");
		setOut("Все поля должны быть заполнены!")
	}
}
	return (
		<div className={styles.container}>
			<Link to="/" className={styles.home}>
				<img src={home} alt="home" className={styles.home} style={{
					width: 50,
                    height: 50,
                    cursor: "pointer"
				}}/>
            </Link>
			<h1 className={styles.title}>Подписка на Кофе</h1>
			<h1 className={styles.subtitle}>Отправьте свои данные и вскоре мы свяжемся с Вами!</h1>
			<div className={styles.fields}>
			<p className={styles.out}>{out}</p>
			<input type="text" id="name" placeholder='Имя' className={styles.name}/>
			<input type="text" id="contact" placeholder='Телефон/e-mail' className={styles.contact}/>
			{/* <textarea name="question" id="questionDesc" placeholder='Ваш вопрос' className={styles.question} rows={6} /> */}
			<button type="submit" className={styles.send} onClick={send}>Отправить</button>
			</div>

		</div>
    )
}