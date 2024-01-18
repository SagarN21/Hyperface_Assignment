import { useEffect,useState } from "react";
import styles from "../CSS/Header.module.css";
import axios from 'axios';

export default function Header() {

  const [state,setState] = useState("")
  const getName = ()=>{
    axios.get('https://mock-server-w2o5.onrender.com/data/1').then((res)=>setState(res.data.name))
  }

  useEffect(()=>{
    getName()
  })

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.greeting}>Hey {state}</h1>
        <div className={styles.message}>
          It’s a nice day to learn something new
        </div>
        <img
          className={styles.profile}
          src="https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg"
        />
      </header>
      <div className={styles.container}>
        <input className={styles.searchbar} />
        <button className={styles.community}>Community</button>
      </div>
    </>
  );
}
