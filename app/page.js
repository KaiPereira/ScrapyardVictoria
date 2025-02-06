import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* <button type="button" className="nes-btn is-success">Success</button> */}
      <div className={styles.NES}>
        <div className={styles.alignement}>
          <h1 className={styles.header}>Scrapyard</h1>
          <h2 className={styles.subHeader}>Victoria, BC</h2>
          <div className={styles.mainText}>
            <p>
              Coming March 15th, Scrapyard victoria will be an in-person hackathon where participants will be challenged to build stupid s#!t and get stupid prizes. 
            </p>
            <p>
              From 9am to 10pm, Bring your laptop to "777 Fort Street" and we’ll provide food, water and give out prizes at the end!
            </p>
          </div>
          <button type="button" className={`nes-btn is-success ${styles.button}`}>Signup</button>
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
