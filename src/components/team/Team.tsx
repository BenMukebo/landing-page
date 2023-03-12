import { motion } from "framer-motion";
import { fadeLeft } from '../../constants';

import image1 from '../../assets/images/team1.jpeg';
import image2 from '../../assets/images/team2.jpeg';
import image3 from '../../assets/images/team3.jpeg';
import image4 from '../../assets/images/team4.jpeg';
// const Fade = require("react-reveal/Fade");

import styles from './team.module.scss';

export const Team: React.FC<{}> = () => {
  return (
    <section className={styles.team_section} id="team">
      <div className={styles.team_wrapper}>
        {/* <Fade bottom> */}
          <div className={styles.team_header}>
            <h3 className={styles.team_sub_title}>Team</h3>
            <h2 className={styles.team_title}>Leadership</h2>
          </div>
        {/* </Fade> */}
        <ul className={styles.teams_wrapper}>
          {/* <Fade bottom> */}
              <motion.li 
                className={styles.team_item}
                variants={fadeLeft}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                data-aos="fade"
                data-aos-delay="100"
              >
                <motion.div className={styles.team_img}>
                  <img src={image1} alt="team_1"/>
                </motion.div>
                <motion.div className={styles.team_content}>
                  <h3 className={styles.team_name}>SHERIA ENOCK Eunosher</h3>
                  <p className={styles.team_position}>
                    Co-Founder, general manager
                  </p>
                  <p className={styles.team_bio}>
                    President Ingenieur A0 en Sciences de l ingenierie et
                    technologies specialiste en conception des systemes
                    electriques et embarques fondateur de la societe SATEC CONGO
                    sarl et expert en couvaison.
                  </p>
                </motion.div>
              </motion.li>
          {/* </Fade> */}
          {/* <Fade bottom> */}
              <motion.li 
                className={styles.team_item}
                variants={fadeLeft}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                data-aos="fade"
                data-aos-delay="200"
              >
                <motion.div className={styles.team_img}>
                  <img src={image4} alt="team_4"/>
                </motion.div>
                <motion.div className={styles.team_content}>
                  <h3 className={styles.team_name}>Ir IHORA MUMBOGO Fidele </h3>
                  <p className={styles.team_position}>DIRECTEUR TECHNIQUE</p>
                  <p className={styles.team_bio}>
                    Ingenieur A0 en Sciences appliquees specialiste en
                    conception des systemes electroniques co fondateur de la
                    societe SATEC CONGO sarl et expert en couvaison.
                  </p>
                </motion.div>
              </motion.li>
          {/* </Fade> */}
          {/* <Fade bottom> */}
              <motion.li 
                className={styles.team_item}
                variants={fadeLeft}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                data-aos="fade"
                data-aos-delay="300"
              >
                <motion.div className={styles.team_img}>
                  <img src={image2} alt="team_2"/>
                </motion.div>
                <motion.div className={styles.team_content}>
                  <h3 className={styles.team_name}>MUNYERENKANA CIRIMWAMI Lydia</h3>
                  <p className={styles.team_position}>
                    DIRECTEUR DE L'ADMINISTRATION ET FINANCE
                  </p>
                  <p className={styles.team_bio}>
                    co-fondatrice de la société SATEC-CONGO sarl et expert en
                    administration licenciée en ANGLAIS ET CULTURES AFRICAINES
                  </p>
                </motion.div>
              </motion.li>
          {/* </Fade> */}
          {/* <Fade bottom> */}
              <motion.li 
                className={styles.team_item}
                variants={fadeLeft}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                data-aos="fade"
                data-aos-delay="100"
              >
                <motion.div className={styles.team_img}>
                  <img src={image3} alt="team_2"/>
                </motion.div>
                <motion.div className={styles.team_content}>
                  <h3 className={styles.team_name}>LIMBO KAMALA Hélène</h3>
                  <p className={styles.team_position}>
                    Co-Founder, DIRECTEUR DE RESSOURCES HUMAINES ET MARKETING
                  </p>
                  <p className={styles.team_bio}>
                    Licenciée en gestion des entreprises, expert en
                    communication et marketing.
                  </p>
                </motion.div>
              </motion.li>
          {/* </Fade> */}
          {/* <Fade bottom> */}
              <motion.li 
                className={styles.team_item}
                variants={fadeLeft}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                data-aos="fade"
                data-aos-delay="200"
              >
                <motion.div className={styles.team_img}>
                  <img
                    src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594982185/UJN_copy_c3stng.jpg"
                    alt="team_"
                  />
                </motion.div>
                <motion.div className={styles.team_content}>
                  <h3 className={styles.team_name}>UN JOUR NOUVEAU HOLDING</h3>
                  <p className={styles.team_position}>
                    Co-Founder, Conseil technique
                  </p>
                  <p className={styles.team_bio}>
                    personne morale co-fondateur de Sarl SATEC-CONGO et
                    specialisée en accompagnement technique et coaching des
                    jeunes entrepreuneurs.
                  </p>
                </motion.div>
              </motion.li>
          {/* </Fade> */}
          {/* <Fade bottom> */}
              <motion.li 
                className={styles.team_item}
                variants={fadeLeft}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                data-aos="fade"
                data-aos-delay="300"
              >
                <motion.div className={styles.team_img}>
                  <img src={image1} alt="team_1"/>
                </motion.div>
                <motion.div className={styles.team_content}>
                  <h3 className={styles.team_name}>Winston Hodson</h3>
                  <p className={styles.team_position}>Marketing</p>
                  <p className={styles.team_bio}>
                    Nisi at consequatur unde molestiae quidem provident
                    voluptatum deleniti quo iste error eos est praesentium
                    distinctio cupiditate tempore suscipit inventore deserunt
                    tenetur.
                  </p>
                </motion.div>
              </motion.li>
          {/* </Fade> */}
        </ul>
      </div>
    </section>
  );
}
