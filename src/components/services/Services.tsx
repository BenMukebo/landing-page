import React from "react";
import { motion } from "framer-motion";
import { fadeLeft } from '../../constants';

import service1 from '../../assets/images/service1.jpg';
import service2 from '../../assets/images/service2.jpg';
import service3 from '../../assets/images/service3.jpg';
import service4 from '../../assets/images/service4.jpg';

import { IconContext } from "react-icons";
import { GiMechanicGarage } from "react-icons/gi";
import { RiComputerLine, RiLightbulbFlashLine } from "react-icons/ri";
import { GiTreeBranch } from "react-icons/gi";
// const Fade = require("react-reveal/Fade");
import styles from './services.module.scss';

export const Services: React.FC<{}> = () => {
  return (
    <motion.section
      className={styles.services_section}
      id="services">
      <div className={styles.services_header}>
        <motion.p className={styles.services_sub_title}>Nos Services</motion.p>
        <motion.h2 className={styles.services_title}>Nous offrons des services</motion.h2>
      </div>
      <motion.ul className={styles.services_domain_wrapper}>
        {/* <Fade bottom> */}
          <motion.li 
            className={styles.domain_item}
            variants={fadeLeft}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div className={styles.domain_img}>
              <img src={service1} alt="mecanique"/>
            </motion.div>
            <motion.div className={styles.domain_content}>
              <motion.div className={styles.domain_icon_div}>
                <IconContext.Provider value={{ className: 'domain_icon' }}>
                <GiMechanicGarage />
              </IconContext.Provider>
            </motion.div>
              <motion.h3 className={styles.domain_title}>MECANIQUE</motion.h3>
              <motion.p className={styles.domain_text}>
                {" "}
                Forage, Aménagement des Sources, Installation et
                Maintenance des Circuits Hydrauliques (Domestiques et
                Industriels), Générateur, Ajustage des Structures
                Métalliques{" "}
              </motion.p>
            </motion.div>
          </motion.li>
        {/* </Fade> */}
        {/* <Fade bottom> */}
          <motion.li 
            className={styles.domain_item}
            variants={fadeLeft}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div className={styles.domain_img}>
              <img src={service2} alt="electricite"/>
            </motion.div>
            <motion.div className={styles.domain_content}>
              <motion.div className={styles.domain_icon_div}>
                 <IconContext.Provider value={{ className: 'domain_icon' }}>
                  <RiLightbulbFlashLine />
                </IconContext.Provider>
              </motion.div>
              <motion.h3 className={styles.domain_title}>ELECTRICITE</motion.h3>
              <motion.p className={styles.domain_text}>
                Domestique, Industrielle, Construction Des Micros
                Centrales Hydroelectrique et solaire, des Lignes et Postes
                (Cabines) de Transformation MT (Moyenne Tension et BT
                (Basse Tension), mise en place et maintenance des reaseaux
                electriques et autres travaux similaires
              </motion.p>
            </motion.div>
          </motion.li>
        {/* </Fade> */}
        {/* <Fade bottom> */}
          <motion.li 
            className={styles.domain_item}
            variants={fadeLeft}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div className={styles.domain_img}>
              <img src={service3} alt="alimentation"/>
            </motion.div>
            <motion.div className={styles.domain_content}>
              <motion.div className={styles.domain_icon_div}>
                 <IconContext.Provider value={{ className: 'domain_icon' }}>
                  <GiTreeBranch />
                </IconContext.Provider>
              </motion.div>
              <motion.h3 className={styles.domain_title}>AGRO ALIMENTTAIRE</motion.h3>
              <motion.p className={styles.domain_text}>
                Conception et fabrication des machines agroalimentaires
                dans le but de lutter contre l’insécurité alimentaire ;
                les machines telles que : Les couveuses automatiques des
                œufs de poules, les inséminateurs artificiels de poissons
                et bien d’autres
              </motion.p>
            </motion.div>
          </motion.li>
        {/* </Fade> */}
        {/* <Fade bottom> */}
          <motion.li 
            className={styles.domain_item}
            variants={fadeLeft}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div className={styles.domain_img}>
              <img src={service4} alt="informatique"/>
            </motion.div>
            <motion.div className={styles.domain_content}>
              <motion.div className={styles.domain_icon_div}>
                <IconContext.Provider value={{ className: 'domain_icon' }}>
                  <RiComputerLine />
                </IconContext.Provider>
              </motion.div>
              <motion.h3 className={styles.domain_title}>INFORMATIQUE APPLIQUEE</motion.h3>
              <motion.p className={styles.domain_text}>
                création des systèmes intelligents, automatisation des
                certaines taches humaines
              </motion.p>
            </motion.div>
          </motion.li>
        {/* </Fade> */}
      </motion.ul>
    </motion.section>
  );
}
