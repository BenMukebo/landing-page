import React from "react";

import service1 from '../../assets/images/nyungwe.webp';
import service2 from '../../assets/images/golden_monkeys.webp';
import service3 from '../../assets/images/elephants.webp';
import service4 from '../../assets/images/gorillas.webp';

import { IconContext } from "react-icons";
import { HiArrowNarrowRight } from "react-icons/hi";

import styles from './features.module.scss';

export const Features: React.FC<{}> = () => {
  return (
    <section
      className={styles.features_section}
      id="services">
      <div className={styles.features_header}>
        <h4 className={styles.features_sub_title}>JOURNAL</h4>
        <h2 className={styles.features_title}>Zambia featured stories</h2>
        <p className={styles.features_text}>Our expertly crafted Zambian safaris offer you a taste of blood-pumping adventures and unrivalled wild encounters. Filled with adventure, vast landscapes and unparalleled comfort in Zambia’s most pristine wilderness. Join our industry-leading guides and passionate storytellers as they share their love for Zambia’s wilderness with you.</p>
      </div>
      <ul className={styles.services_domain_wrapper}>
          <li className={styles.domain_item}>
            <div className={styles.domain_img}>
              <img src={service1} alt="Unwrapping"/>
            </div>
            <div className={styles.domain_content}>
              <h3 className={styles.domain_title}>Canopy Walk - Nyungwe </h3>
              <p className={styles.domain_text}>
                {" "}
                Forage, Aménagement des Sources, Installation et
                Maintenance des Circuits Hydrauliques (Domestiques et
                Industriels), Générateur, Ajustage des Structures
                Métalliques{" "}
              </p>
              <div className={styles.domain_more_btn}>
                <HiArrowNarrowRight />
                <p>READ MORE</p>
              </div>
              <div className={styles.domain_date_location}>
                <p>RUKARIRO KATSANDE <span></span> 18.11.2014</p>
              </div>
            </div>
          </li>

          <li className={styles.domain_item}>
            <div className={styles.domain_img}>
              <img src={service2} alt="Golden_Monkeys"/>
            </div>
            <div className={styles.domain_content}>
              <h3 className={styles.domain_title}>Golden Monkeys</h3>
              <p className={styles.domain_text}>
                Domestique, Industrielle, Construction Des Micros
                Centrales Hydroelectrique et solaire, des Lignes et Postes
                (Cabines) de Transformation MT (Moyenne Tension et BT
                (Basse Tension), mise en place et maintenance des reaseaux
                electriques et autres travaux similaires
              </p>
              <div className={styles.domain_more_btn}>
                <HiArrowNarrowRight />
                <p>READ MORE</p>
              </div>
              <div className={styles.domain_date_location}>
                <p>RUKARIRO KATSANDE <span></span> 18.11.2014</p>
              </div>
            </div>
          </li>

          <li className={styles.domain_item}>
            <div className={styles.domain_img}>
              <img src={service3} alt="Elephants"/>
            </div>
            <div className={styles.domain_content}>
              <h3 className={styles.domain_title}>Elephants</h3>
              <p className={styles.domain_text}>
                Conception et fabrication des machines agroalimentaires
                dans le but de lutter contre l’insécurité alimentaire ;
                les machines telles que : Les couveuses automatiques des
                œufs de poules, les inséminateurs artificiels de poissons
                et bien d’autres
              </p>
              <div className={styles.domain_more_btn}>
                <HiArrowNarrowRight />
                <p>READ MORE</p>
              </div>
              <div className={styles.domain_date_location}>
                <p>RUKARIRO KATSANDE <span></span> 18.11.2014</p>
              </div>
            </div>
          </li>

          <li className={styles.domain_item}>
            <div className={styles.domain_img}>
              <img src={service4} alt="Gorillas"/>
            </div>
            <div className={styles.domain_content}>
              <h3 className={styles.domain_title}>Gorillas</h3>
              <p className={styles.domain_text}>
                Conception et fabrication des machines agroalimentaires
                dans le but de lutter contre l’insécurité alimentaire ;
                les machines telles que : Les couveuses automatiques des
                œufs de poules, les inséminateurs artificiels de poissons
                et bien d’autres
              </p>
              <div className={styles.domain_more_btn}>
                <HiArrowNarrowRight />
                <p>READ MORE</p>
              </div>
              <div className={styles.domain_date_location}>
                <p>RUKARIRO KATSANDE <span></span> 18.11.2014</p>
              </div>
            </div>
          </li>
      </ul>
    </section>
  );
}
