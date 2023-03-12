import React from "react";
import { motion } from "framer-motion";

import image1 from '../../assets/images/admin.jpeg';
import image2 from '../../assets/images/about.jpg';

// const Fade = require("react-reveal/Fade");
import styles from './about.module.scss';

export const About: React.FC<{}> = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.articles_wrapper}>

        <article className={styles.article}>
          <div className={styles.article_content}>
            {/* <Fade bottom> */}
              <h2 className={styles.article_title}>A propos de nous</h2>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <p
              className={styles.article_text}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              >
                La grandeur et la force d’un homme réside dans les idées,
                forces qui orientent un peuple dans un espace donné.
                Convaincus de l’impérieuse et absolue nécessité de faire de
                notre ville, province et pays un pool d’intelligence et de
                savoir-faire, une puissance économique, énergétique,
                environnementale et de mieux être. Prenant conscience de
                l’obligation d’instaurer à l’Est de la RD Congo/ N-K, une
                culture d’excellence qui rompt avec les pesanteurs du
                nivellement par le bas ; avons créé une société partenaire
                technique pour la Sécurité, la qualité et la garantie des
                services afin d’offrir au peuple congolais l’occasion
                d’engager la R D Congo sur l’orbite de l’émergence.
            </p>
            {/* </Fade> */}
          </div>
          {/* <Fade bottom> */}
          <div
            className={styles.article_img}
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
              >
              <img src={image1} alt="about-img1" />
          </div>
          {/* </Fade> */}
        </article>

        <article className={styles.article}>
          <div className={styles.article_content}>
            {/* <Fade bottom> */}
              <h2 className={styles.article_title}>
                Domaines d’action ou d’intervention{" "}
              </h2>
            {/* </Fade> */}
            {/* <Fade bottom> */}
              <motion.p className={styles.article_text}>
                SATEC CONGO Sarl est une société qui offre des services, un
                support logistique (fourniture et vente des incubateurs
                automatiques des œufs de qualité fabriqués en RDC, vente et
                prestation des services techniques d’ingenierie dans le
                secteur : de l’electricite, mecanique électronique,
                informatique appliquee, plomberie et construction.) ainsi que
                des formations professionnelles dans les domaines techniques
                notamment :
              </motion.p>
            {/* </Fade> */}
          </div>
          {/* <Fade bottom> */}
            <div
              className={styles.article_img}
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              >
              <img src={image2} alt="about-img2" />
            </div>
            {/* </Fade> */}
        </article>
      </div>
  </section>
  );
}
