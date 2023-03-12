import React from "react";
import { motion } from "framer-motion";
import { fadeLeft } from '../../constants';

import { ProductItem } from '../../modal/index';

import Prod1 from '../../assets/images/satec2.png';
import Prod2 from '../../assets/images/satec6.png';
import Prod3 from '../../assets/images/satec4.png';
import Prod4 from '../../assets/images/satec5.png';
import Prod5 from '../../assets/images/satec3.png';
import Prod6 from '../../assets/images/satec11.png';
import {AiFillPlayCircle} from 'react-icons/ai';
// const Fade = require("react-reveal/Fade");
import styles from './products.module.scss';

// type Products = {
//   name: string;
//   figure: object;
//   capacity: string;
//   // children?: JSX.Element|JSX.Element[];
//   // children?: React.ReactNode
// }

export const Products: React.FC<{}> = () => {
  const ProductsElement: ProductItem[] = [
    {
      id: 'prod1',
      figure: Prod1,
      capacity: 240,
      animation: 'bottom',
      puissance: 200,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 45,
      guaranty: 1,
      taux: [80, 90],
      price: [700.00, 600.00],
      power: 600,
      battery: {
        voltage: 12,
        current: 300,
      },
      fadeAnim: 'left',
    },

    {
      id: 'prod2',
      figure: Prod2,
      capacity: 480,
      animation: 'right',
      puissance: 240,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 45,
      guaranty: 1,
      taux: [80, 90],
      price: [700.00, 680.00],
      power: 600,
      battery: {
        voltage: 12,
        current: 300,
      },
      fadeAnim: '',
    },

    {
      id: 'prod3',
      figure: Prod3,
      capacity: 600,
      animation: '',
      puissance: 340,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 80,
      guaranty: 1,
      taux: [80, 90],
      price: [900.00, 800.00],
      power: 600,
      battery: {
        voltage: 12,
        current: 300,
      },
      fadeAnim: 'right',
    },

    {
      id: 'prod4',
      figure: Prod4,
      capacity: 840, //900
      animation: 'bottom',
      puissance: 400,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 90,
      guaranty: 1,
      taux: [80, 90],
      price: [1200.00, 1000.00],
      power: 600,
      battery: {
        voltage: 12,
        current: 300,
      },
      fadeAnim: '',
    },

    {
      id: 'prod5',
      figure: Prod5,
      capacity: 5000,
      animation: '',
      puissance: 200,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 160,
      guaranty: 1,
      taux: [80, 90],
      price: [4000.00, 3200.00],
      power: 800,
      battery: {
        voltage: 12,
        current: 420,
      },
      fadeAnim: 'left',
    },

    {
      id: 'prod6',
      figure: Prod6,
      capacity: 10000,
      animation: 'bottom',
      puissance: 2000,
      tension: {
        AC: 220,
        DC: 12,
      },
      poid: 300,
      guaranty: 1,
      taux: [80, 90],
      price: [9500.00, 8500.00],
      power: 3000,
      battery: {
        voltage: 12,
        current: 840,
      },
      fadeAnim: 'right',
    },
  ]

  return (
    <section 
      className={styles.products_section}
      id="products">
      <div className={styles.products_section_one}>
        <div className={styles.products_header}>
          {/* <Fade bottom> */}
            <h2 className={styles.products_title}>Nos Produits</h2>
          {/* </Fade> */}
          {/* <Fade bottom> */}
            <p className={styles.products_text}>
              Profitez des meilleures installations électriques
              industrielles et domestiques, Plomberie et des bons
              dimensionements des systèmes solaires au standard
              international avec la meilleure entreprise du moment. <br />
              SATEC - Congo sarl.
            </p>
          {/* </Fade> */}
        </div>

        <ul className={styles.products_wrapper}>
          {ProductsElement.map((product: ProductItem) => (  
          // <Fade bottom>
            <motion.li
              key={product.id}
              className={styles.product_item}
              variants={fadeLeft}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              >
              <div className={styles.product_item_img}>
                <figure>
                  <img src={product.figure} alt={product.id} className={styles.product_img_fluid}/>
                </figure>
              </div>
              <div className={styles.product_item_content}>
                <p className={styles.product_capacity}>
                  Capacité {product.capacity} oeufs
                </p>
                <button
                type="button"
                aria-label="product"
                className={styles.product_link}>
                  <a href={`#${product.id}`} className="btn view-btn ml-1 rounded-0">
                    Details
                  </a>
                </button>
              </div>
            </motion.li>
          // </Fade>
          ))}
        </ul>
      </div>
      
      <div className={styles.products_section_two}>
        <ul className={styles.products_details_wraper} >
          {ProductsElement.map((product: ProductItem) => (
          // <Fade left>
            <motion.li
              className={styles.product_details}
              id={product.id}
              variants={fadeLeft}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              >
                <motion.div className={styles.product_img}>
                  <img src={product.figure} alt={product.id} className={styles.img} />
                </motion.div>

                <motion.div className={styles.product_content}>
                  <h3 className={styles.product_title}>
                    A propos du produit
                  </h3>
                  <motion.p className="mb-1">Capacite : {product.capacity} Oeufs</motion.p>
                  <motion.p className="mb-1">Puissance : {product.puissance}W Max</motion.p>
                  <motion.p className="mb-1">Tension : {product.tension['AC']}V AC/ {product.tension.DC}V DC</motion.p>
                  <motion.p className="mb-1">Poid : {product.poid}Kg</motion.p>
                  <motion.p className="mb-1">Guaranty : {product.guaranty} an</motion.p>
                  <motion.p className="mb-1">Taux d'ecclosion : {product.taux[0]} à {product.taux[1]}%</motion.p>
                  <motion.div className="mb-4">
                    <p>Prix:</p>
                    <div  className={styles.product_price}>
                      <strong className="mr-2">${product.price[0]}</strong> ${product.price[1]}
                    </div>
                  </motion.div>
                  <motion.p className={styles.product_text_danger}>
                    Puissance necessaire en energie solaires qu'il vous faut
                  </motion.p>
                  <motion.p className="mb-1">Panneau solaire : {product.power}W</motion.p>
                  <motion.p className="mb-1">Batterie : {product.battery['voltage']}V / {product.battery['current']}Ah</motion.p>
                  <motion.p>
                    <a href="#contact" className={styles.product_pay_btn}>
                      <span>Acheter</span>
                      <AiFillPlayCircle/>
                    </a>
                  </motion.p>
                </motion.div>
            </motion.li>
          // </Fade>
          ))}
        </ul>
      </div>
    </section>
  );
}
