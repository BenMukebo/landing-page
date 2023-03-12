import { motion } from "framer-motion";
import { fadeLeft } from '../../constants';

import {
  // FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";

import Ben from '../../assets/images/ben.png';
import styles from './testimonial.module.scss';
// const Fade = require("react-reveal/Fade");

export const Testimonials: React.FC<{}> = () => {
  return (
    <motion.section className={styles.testimonials_section} id="team">
      <div className={styles.testimonials_wrapper}>
        {/* <Fade bottom> */}
          <div className={styles.testimonials_header}>
            <h3 className={styles.testimonials_sub_title}>Lire les Témoignages</h3>
            <h2 className={styles.testimonials_title}>
              C'est toujours une joie d'entendre que le travail
              que nousfaisons a des critiques positives
            </h2>
          </div>
        {/* </Fade> */}
    
        {/* <Fade bottom> */}
          <motion.div
          className={styles.testimonials_wrappers}
          variants={fadeLeft}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          >
            <motion.article className={styles.testimony} >
              <motion.div className={styles.testimony_text}>
                <FaQuoteRight/>
                <motion.p className={styles.text}>
                  SATEC - Congo sarl est la meilleure entreprise avec laquelle
                  nous avons travaillé. Toute l'équipe a livré avec tact un
                  projet d'une qualité exceptionnelle tout en respectant
                  l'échéancier et le budget. Nous espérons retravailler
                  avec CICO Sarl dans un futur proche !.
                </motion.p>
              </motion.div>
            </motion.article>

            <motion.div className={styles.testimony_author}>
               <motion.div className={styles.author_img}>
                <img src={Ben} alt="ben_dev"/>
              </motion.div>
              <p className={styles.testimony_name}>- Ben Mukebo <strong>Full-stack developer</strong> -</p>
              {/* <p className={styles.testimony_position}>DEVELOPER</p> */}
            </motion.div>
          </motion.div>
        {/* </Fade> */}
      </div>

      <div className={styles.blog_wrapper}>
        <div className={styles.blog_text}>
          <div className={styles.blog_text}>
            <h2>Pas encore satisfait de notre tendance ?</h2>
            <p>Dernières mises à jour du blog</p>  
          </div>
        </div>
        <div className={styles.blog_btn}>
          <button type="button" aria-label="blog">
            <a href="#">voir notre blog</a>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
