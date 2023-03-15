import styles from './intro2.module.scss';
import imageBg from '../../assets/images/gorilla_trek.webp';



export const Intro2: React.FC<{}> = () => {
  return (
    <section className={styles.intro_section} id="home">
      <div className={styles.overlay}></div>
      <div className={styles.image_cover}>
        <img src={imageBg} alt="gorilla" />
      </div>
      <div className={styles.intro_wrapper}>
        <div className={styles.standing_line}></div>
        <div className={styles.container}>
          <h1 className={styles.intro_title}>Gorilla</h1>
          <p className={styles.intro_text}>Wilderness takes you on an unrivalled journey through a collection of the world’s most iconic wild destinations.</p>
          {/* <a href="#services">
            <button className={styles.intro_btn} type="submit" aria-label="services">
              Nos Services
            </button>
          </a> */}
          <div className={styles.small_circle}></div>
          <div className={styles.circle_wrapper}>
            <div className={styles.line_bar}></div>
            <div className={styles.line_bar}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

