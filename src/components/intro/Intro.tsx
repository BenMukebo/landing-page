import { BsPlayFill } from "react-icons/bs";
import styles from './intro.module.scss';
import videoBg from '../../assets/videos/video-bg.mp4';



export const Intro: React.FC<{}> = () => {
  return (
    <section className={styles.intro_section} id="home">
      <div className={styles.overlay}></div>
      <div className={styles.video_bg}>
        <video src={videoBg} autoPlay loop muted />
      </div>
      <div className={styles.intro_wrapper}>
        <div className={styles.container}>
          <p className={styles.intro_subtitle}>WELCOME TO</p>
          <h1 className={styles.intro_title}>CHIMPANZEE TREKKING SAFARIS</h1>
          <p className={styles.intro_text}>Wilderness takes you on an unrivalled journey through a collection of the world’s most iconic wild destinations.</p>
          {/* <a href="#services">
            <button className={styles.intro_btn} type="submit" aria-label="services">
              Nos Services
            </button>
          </a> */}
          <div className={styles.small_circle}></div>
          <div className={styles.circle_wrapper}>
            <div className={styles.line_bar}></div>
            <div className={styles.circle}> <BsPlayFill /></div>
            <div className={styles.line_bar}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

