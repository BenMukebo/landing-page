import React from "react";

import service1 from '../../assets/images/service1.jpg';
import service2 from '../../assets/images/service2.jpg';
import service3 from '../../assets/images/service3.jpg';
import service4 from '../../assets/images/service4.jpg';

import { IconContext } from "react-icons";
import { GiMechanicGarage } from "react-icons/gi";
import { RiComputerLine, RiLightbulbFlashLine } from "react-icons/ri";
import { GiTreeBranch } from "react-icons/gi";
import styles from './services.module.scss';

export const Services: React.FC<{}> = () => {
  return (
    <section
      className={styles.services_section}
      id="services">
      <div className={styles.services_header}>
        <p className={styles.services_sub_title}>Nos Services</p>
        <h2 className={styles.services_title}>Nous offrons des services</h2>
      </div>
      <ul className={styles.services_domain_wrapper}>
          <li className={styles.domain_item}>
            <div className={styles.domain_img}>
              <img src={service1} alt="mecanique"/>
            </div>
            <div className={styles.domain_content}>
              <div className={styles.domain_icon_div}>
                <IconContext.Provider value={{ className: 'domain_icon' }}>
                <GiMechanicGarage />
              </IconContext.Provider>
            </div>
              <h3 className={styles.domain_title}>MECANIQUE</h3>
              <p className={styles.domain_text}>
                {" "}
                Forage, Aménagement des Sources, Installation et
                Maintenance des Circuits Hydrauliques (Domestiques et
                Industriels), Générateur, Ajustage des Structures
                Métalliques{" "}
              </p>
            </div>
          </li>

          <li className={styles.domain_item}>
            <div className={styles.domain_img}>
              <img src={service2} alt="electricite"/>
            </div>
            <div className={styles.domain_content}>
              <div className={styles.domain_icon_div}>
                 <IconContext.Provider value={{ className: 'domain_icon' }}>
                  <RiLightbulbFlashLine />
                </IconContext.Provider>
              </div>
              <h3 className={styles.domain_title}>ELECTRICITE</h3>
              <p className={styles.domain_text}>
                Domestique, Industrielle, Construction Des Micros
                Centrales Hydroelectrique et solaire, des Lignes et Postes
                (Cabines) de Transformation MT (Moyenne Tension et BT
                (Basse Tension), mise en place et maintenance des reaseaux
                electriques et autres travaux similaires
              </p>
            </div>
          </li>

          <li className={styles.domain_item}>
            <div className={styles.domain_img}>
              <img src={service3} alt="alimentation"/>
            </div>
            <div className={styles.domain_content}>
              <div className={styles.domain_icon_div}>
                 <IconContext.Provider value={{ className: 'domain_icon' }}>
                  <GiTreeBranch />
                </IconContext.Provider>
              </div>
              <h3 className={styles.domain_title}>AGRO ALIMENTTAIRE</h3>
              <p className={styles.domain_text}>
                Conception et fabrication des machines agroalimentaires
                dans le but de lutter contre l’insécurité alimentaire ;
                les machines telles que : Les couveuses automatiques des
                œufs de poules, les inséminateurs artificiels de poissons
                et bien d’autres
              </p>
            </div>
          </li>

          <li className={styles.domain_item}>
            <div className={styles.domain_img}>
              <img src={service4} alt="informatique"/>
            </div>
            <div className={styles.domain_content}>
              <div className={styles.domain_icon_div}>
                <IconContext.Provider value={{ className: 'domain_icon' }}>
                  <RiComputerLine />
                </IconContext.Provider>
              </div>
              <h3 className={styles.domain_title}>INFORMATIQUE APPLIQUEE</h3>
              <p className={styles.domain_text}>
                création des systèmes intelligents, automatisation des
                certaines taches humaines
              </p>
            </div>
          </li>
      </ul>
    </section>
  );
}
