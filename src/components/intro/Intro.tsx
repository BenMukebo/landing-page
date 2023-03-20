import { useEffect } from 'react';
import { BsPlayFill } from "react-icons/bs";
import styles from './intro.module.scss';
import videoBg from '../../assets/videos/video-bg.mp4';
import AOS from 'aos';



export const Intro: React.FC<{}> = () => {

  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);

  return (
    <section className={styles.intro_section} id="home">
      <div className={styles.overlay}></div>
      <div className={styles.video_bg}>
        <video src={videoBg} autoPlay loop muted />
      </div>
      <div className={styles.intro_wrapper}>
        <div className={styles.container}>
          <h4 className={styles.intro_sub_title} data-aos="zoom-in">WELCOME TO</h4>
          <h1 className={styles.intro_title} data-aos="zoom-in">CHIMPANZEE TREKKING SAFARIS</h1>
          <p className={styles.intro_text} data-aos="zoom-out">Wilderness takes you on an unrivalled journey through a collection of the world’s most iconic wild destinations.</p>
          {/* <a href="#services">
            <button className={styles.intro_btn} type="submit" aria-label="services">
              Nos Services
            </button>
          </a> */}
          <div className={styles.small_circle}></div>
          <div className={styles.circle_wrapper} data-aos="zoom-out">
            <div className={styles.line_bar}></div>
            <div className={styles.circle}> <BsPlayFill /></div>
            <div className={styles.line_bar}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

