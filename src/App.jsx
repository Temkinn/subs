import { Link, Outlet } from 'react-router-dom'
import styles from "./App.module.css"
import "./index.css"

import Welcome from "./components/welcome/welcome";
import Parallax from "./components/parallax/parallax";
import Subscribe1 from "./components/subscribe1/subscribe1";
import Subscribe2 from "./components/subscribe2/subscribe2";
import Subscribe3 from "./components/subscribe3/subscribe3";
import Subscribe4 from "./components/subscribe4/subscribe4";

const monthes = [
  'ЯНВАРЬ',
  'ФЕВРАЛЬ',
  'МАРТ',
  'АПРЕЛЬ',
  'МАЙ',
  'ИЮНЬ',
  'ИЮЛЬ',
  'АВГУСТ',
  'СЕНТЯБРЬ',
  'ОКТЯБРЬ',
  'НОЯБРЬ',
  'ДЕКАБРЬ'
]

function Layout() {
  const date = new Date()
  const month = date.getUTCMonth()

  return (
    <div className={styles.page}>
      <Welcome />
      <Parallax />
      <Subscribe1 title="Кофе в зернах"
          white={`ФИЛЬТР ПОДПИСКА ${monthes[month]}`}
          price="Мало"
          old="Много"/>
      <Subscribe2 title="Кофе в зернах"
          white={`МИКС ПОДПИСКА ${monthes[month]}`}
          price="Мало"
          old="Много"/>
      <Subscribe3 title="Кофе в зернах"
          white={`ЭСПРЕССО ${monthes[month]}`}
          price="Мало"
          old="Много"/>
      <Subscribe4 title="Кофе в дрип пакетах"
          white={`ДРИП ПОДПИСКА ${monthes[month]}`}
          price="Мало"
          old="Много"/>


      <div className={styles.linkc1}>
        <Link 
          to="/form"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
        Подписаться
        </Link>
      </div>

      <div className={styles.linkc2}>
        <Link 
          to="/question"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
        Задать вопрос
        </Link>
      </div>
      <Outlet />

    </div>
  )
}

export default Layout
