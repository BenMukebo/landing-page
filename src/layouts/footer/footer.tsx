import React from "react";
import { motion } from "framer-motion"

import { AiOutlineTwitter } from 'react-icons/ai';
import { TbBrandInstagram,  } from 'react-icons/tb';
import {
  FaFacebookF,
  FaWhatsapp,
  FaHeart,
  // FaMapMarkerAlt
} from "react-icons/fa";
import {
  MdOutlineSubdirectoryArrowRight,
} from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BiMap, BiPaperPlane } from 'react-icons/bi';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <motion.footer className={styles.footer_section}>
      <motion.div className={styles.footer_one}>
        <motion.ul className={styles.footer_lists}>
          <motion.li className={styles.footer_lists_items}>
            <h3 className={styles.item_title}>Racourcies</h3>
            <motion.div className={styles.item_content}>
              <p>
                <a href="#about">
                  <MdOutlineSubdirectoryArrowRight/>
                  Apropos de nous
                </a>
              </p>
              <p>
                <a href="#services">
                  <MdOutlineSubdirectoryArrowRight/>
                   Nos services
                </a>
              </p>
              <p>
                <a href="#products">
                  <MdOutlineSubdirectoryArrowRight/>
                  Nos products
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/satecongo?mibextid=LQQJ4d">
                  <MdOutlineSubdirectoryArrowRight/>
                  Notre blog
                </a>
              </p>
            </motion.div>
          </motion.li>

          <motion.li className={styles.footer_lists_items}>
            <h3 className={styles.item_title}>Aprops de nous</h3>
            <motion.div className={styles.item_content}>
              <p className="">
                La grandeur et la force d’un homme <br/>
                réside dans les idées, forces qui orientent <br/>
                un peuple dans un espace donné. <br/>
                Convaincus de l’impérieuse et absolue <br/>
                nécessité de faire de notre ville,
              </p>
            </motion.div>
          </motion.li>

          <motion.li className={styles.footer_lists_items}>
            <h3 className={styles.item_title}>Contacts</h3>
            <motion.div className={styles.item_content}>
              <p className={styles.contact}>
                <BiMap/>
                {/* <span>Adresse:</span> */}
                136, Av La Frontiere, Q.Katindo <br/>
                Ville de Goma / Nord-Kivu 
              </p>
              <p className={styles.contact}>
                <FiPhoneCall/>
                {/* <span>Téléphone:</span> */}
                (+243) 994 764 613 <br/>
                (+243) 971 838 655
              </p>
              <p className={styles.contact}>
                <BiPaperPlane/>
                {/* <span>Email:</span> */}
                info@sateccongo.com  <br/>
                eunoshersheria@gmail.com
              </p>
            </motion.div>
          </motion.li>

          <motion.li className={styles.footer_lists_items}>
            <h3>Suivez nous</h3>
            <motion.div className={styles.item_content}>
              <div className={styles.item_content}>
                <p>
                  Restez à jour, restez informé <br/>
                  de nos prochains produits ...
                </p>
                <p>Soyons socials</p>
                <div className={styles.social_media_wrapper}>
                  <a href="https://www.facebook.com/satecongo?mibextid=LQQJ4d"
                    target="blank" title="facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://wa.me/+243971838655" title="whatsApp">
                    <FaWhatsapp />
                  </a>
                  <a href="https://instagram.com/sateccongo?igshid=YWJhMjlhZTc=" title="instagram">
                    <TbBrandInstagram />
                  </a>
                  <a href="https://www.facebook.com/pages/category/Business-Service/SATEC-Congo-incubation-113625197074726/" title="facebook">
                    {/* <IconContext.Provider value={{ className: "footer-icon" }}> */}
                    <AiOutlineTwitter />
                    {/* </IconContext.Provider> */}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.li>
        </motion.ul>
      </motion.div>

      <motion.div className={styles.footer_copy_right}>
        <motion.p>
          Copyright &copy; 2020 All rights reserved | {''}
          <span>Made with <FaHeart /> by 
            <a href="https://www.fidbagraphics.com" title="fidbagraphics" target="blank">
              {''} Fidba Graphics
            </a>
          </span>
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

