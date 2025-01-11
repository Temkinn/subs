import styles from "./styles.module.css"
import { useState, useEffect } from "react"

import home from "./../assets/home2.png"
import { Link } from "react-router-dom"


export default function Question(){

	const WebApp = window.Telegram.WebApp

	useEffect(() => {

		try{
			WebApp.ready()
		} catch(e){
			throw(e)
		}


	},[])
	const [out, setOut] = useState("")

	try{
		WebApp.expand();
	} catch(e){
		throw(e)
	}


	function send(){
	const name = document.getElementById("name").value
	const contact = document.getElementById("contact").value
	const question = document.getElementById("questionDesc").value

	let done = 0
	if(name != ""){
		done++
	}
	if(contact != ""){
		done++
	}
	if(question != ""){
		done++
	}

	if(done == 3){
		try{
			WebApp.sendData(`subscribe_questionᗰ${name}(${contact}) спрашивает: ${question}`)
		} catch(e){
			throw(e)
		}
	} else {
		console.log("Все поля должны быть заполнены!");
		setOut("Все поля должны быть заполнены!")
	}
}

  
	return (
		<>
		<div className={styles.container}>
			<Link to="/" className={styles.home}>
				<img src={home} alt="home" className={styles.home} style={{
					width: 50,
                    height: 50,
				}}/>
            </Link>
			<h1 className={styles.title}>Задайте вопрос</h1>
			<h1 className={styles.subtitle}>Отправьте свои данные и вскоре мы свяжемся с Вами!</h1>
			<div className={styles.fields}>
				<p className={styles.out}>{out}</p>
				<input type="text" placeholder='Имя' id="name" className={styles.name}/>
				<input type="text" placeholder='Телефон/e-mail' id="contact" className={styles.contact}/>
				<textarea name="question" id="questionDesc" placeholder='Ваш вопрос' className={styles.question} rows={6} />
				<button type="submit" className={styles.send} onClick={send}>Отправить</button>
			</div>
		</div>
	</>)
}