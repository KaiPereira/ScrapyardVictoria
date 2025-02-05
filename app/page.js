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
              from 8am to 11pm, Bring your laptop and we’ll provide food, water and give out prizes at the end!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
