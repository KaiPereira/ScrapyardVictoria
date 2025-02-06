"use client"

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.NES}>
        <div className={styles.alignement}>
          <h1 className={styles.header}>Scrapyard</h1>
          <h2 className={styles.subHeader}>Victoria, BC</h2>
          <div className={styles.mainText}>
            <p>
              Coming March 15th, Scrapyard Victoria will be an in-person, highschool hackathon where participants will be challenged to build stupid s#!t and get stupid prizes.  
            </p>
            <p>
              The event will take place for highschoolers at "777 Fort Street" from 9am to 10pm. Bring your laptop (and hardware if you want) and we'll provide everyone with food, drinks and everything else! 
            </p>
          </div>
          <button type="button" className={`nes-btn is-success ${styles.button}`} onClick={() => window.open("https://forms.hackclub.com/scrapyard-signup", '_blank').focus()}>Signup</button>
        </div>
        <img src="/ghost_red.svg" alt="blue ghost" className={styles.ghost_red1} />
        <img src="/ghost_red.svg" alt="blue ghost" className={styles.ghost_red2} />

        <img src="/ghost_orange.svg" alt="blue ghost" className={styles.ghost_orange1} />
        <img src="/ghost_orange.svg" alt="blue ghost" className={styles.ghost_orange2} />

        <img src="/ghost_blue.svg" alt="blue ghost" className={styles.ghost_blue1} />
        <img src="/ghost_blue.svg" alt="blue ghost" className={styles.ghost_blue2} />
      </div>
    </>
  );
}
