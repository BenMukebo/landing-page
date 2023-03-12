import { BsArrowRightShort } from "react-icons/bs";
import styles from './intro.module.scss';
// import Fade from "react-reveal/Fade";
// const Fade = require("react-reveal/Fade");

export const Intro: React.FC<{}> = () => {
  return (
    <section
      className={styles.intro_section}
      id="home"
      data-aos="zoom-in-left"
      data-stellar-background-ratio="0.5"
    >
      <div className={styles.overlay_bg}>
        <div className={styles.container} data-aos="fade-up" data-aos-delay="400">
          {/* <Fade bottom> */}
            <h1 className={styles.intro_title}>
              Etês vous passionné de la
              technologie ?
            </h1>
          {/* </Fade> */}
          {/* <Fade bottom> */}
            <p className={styles.intro_subtitle}>
              Si vous avez besoin d'une solution pour votre entreprise ou projet. <br/>
              Ne cherchez pas plus loin que SATEC - Congo sarl. <br />
              "La solution c'est nous !"
              {/* La solution c'est nous! SATEC - Congo sarl. */}
            </p>
          {/* </Fade> */}
          {/* <Fade bottom> */}
          <a href="#services">
            <button className={styles.intro_btn} type="submit" aria-label="services">
              Nos Services
              {/* <BsArrowRightShort/> */}
            </button>
            </a>
          {/* </Fade> */}
        </div>
      </div>
    </section>
  );
};

