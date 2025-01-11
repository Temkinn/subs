import styles from "./styles.module.css";
import { useState, useEffect } from "react";

import home from "./../assets/home2.png";
import { Link } from "react-router-dom";

export default function Form() {
  const WebApp = window.Telegram.WebApp;

  useEffect(() => {
    WebApp.ready();
  }, []);
  const [out, setOut] = useState("");

  WebApp.expand();

  function send() {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const type = document.getElementById("type").value;

    let done = 0;
    if (name != "") {
      done++;
    }
    if (contact != "") {
      done++;
    }
    if (type != "") {
      done++;
    }

    if (done == 3) {
      WebApp.sendData(
        `subscribeᗰ${name}(${contact}) хочет оформить подписку "${type}" на кофе`
      );
    } else {
      console.log("Все поля должны быть заполнены!");
      setOut("Все поля должны быть заполнены!");
    }
  }
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.home}>
        <img
          src={home}
          alt="home"
          className={styles.home}
          style={{
            width: 50,
            height: 50,
            cursor: "pointer",
          }}
        />
      </Link>
      <h1 className={styles.title}>Подписка на Кофе</h1>
      <h1 className={styles.subtitle}>
        Отправьте свои данные и вскоре мы свяжемся с Вами!
      </h1>
      <div className={styles.fields}>
        <p className={styles.out}>{out}</p>
        <input
          type="text"
          id="name"
          placeholder="Имя"
          className={styles.name}
        />
        <input
          type="text"
          id="contact"
          placeholder="Телефон/e-mail"
          className={styles.contact}
        />
        <select name="subscribe" id="type" className={styles.type}>
          <option className={styles.option}>Фильтр Подписка Ноябрь</option>
          <option className={styles.option}>Микс Подписка Ноябрь</option>
          <option className={styles.option}>Эспрессо Ноябрь</option>
          <option className={styles.option}>Дрип Подписка Ноябрь</option>
        </select>
        <button type="submit" className={styles.send} onClick={send}>
          Отправить
        </button>
      </div>
    </div>
  );
}
