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
    <footer className={styles.footer_section}>
      <div className={styles.footer_one}>
        <div className={styles.footer_social}>
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

        <ul className={styles.footer_lists}>
          <li className={styles.footer_lists_items}>
            <h3 className={styles.item_title}>Menu & Links</h3>
            <motion.div className={styles.item_content}>
              <p>
                <a href="#home">
                  <MdOutlineSubdirectoryArrowRight/>
                   Home
                </a>
              </p>
              <p>
                <a href="#about">
                  <MdOutlineSubdirectoryArrowRight/>
                  Apropos de nous
                </a>
              </p>
              <p>
                <a href="#home">
                  <MdOutlineSubdirectoryArrowRight/>
                  Destinations
                </a>
              </p>
              <p>
                <a href="#services">
                  <MdOutlineSubdirectoryArrowRight/>
                   Services
                </a>
              </p>
              <p>
                <a href="#products">
                  <MdOutlineSubdirectoryArrowRight/>
                  Safari Qoute
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/satecongo?mibextid=LQQJ4d">
                  <MdOutlineSubdirectoryArrowRight/>
                  Blog
                </a>
              </p>
            </motion.div>
          </li>

          {/* <li className={styles.footer_lists_items}>
            <h3 className={styles.item_title}>Destinations</h3>
            <motion.div className={styles.item_content}>
              <p>Botswana</p>
              <p>Namibia</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </motion.div>
          </li> */}

          <li className={styles.footer_lists_items}>
            <h3 className={styles.item_title}>Welcome to Kawira</h3>
            <motion.div className={styles.item_content}>
              <p className="">
                We promise exceptional service every step of the <br/>
                way. From Logistics, 24/7 emergency assistance <br/>
                and our range of safari choices, we are the one- <br/>
                stop shop Gorilla Trekking Tours, Hotel and Lodge <br/>
                accommodations, sightseeing and more.
              </p>
            </motion.div>
          </li>

          <li className={styles.footer_lists_items}>
            <h3 className={styles.item_title}>Contacts</h3>
            <motion.div className={styles.item_content}>
              <p>KAWIRA SAFARIS LTD, KAMPALA UGANDA</p>
              <p className={styles.contact}>
                <BiMap/>
                {/* <span>Adresse:</span> */}
                KK 718 ST, Kigali, Rwandao
              </p>
              <p className={styles.contact}>
                <FiPhoneCall/>
                {/* <span>Phone :</span> */}
                (+250) 787 976 905
              </p>
              <p className={styles.contact}>
                <BiPaperPlane/>
                {/* <span>Email:</span> */}
                info@kawirasafaris.net.com
              </p>
            </motion.div>
          </li>

          {/* <li className={styles.footer_lists_items}>
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
                    <AiOutlineTwitter />
                  </a>
                </div>
              </div>
            </motion.div>
          </li> */}
        </ul>
      </div>

      <div className={styles.footer_copy_right}>
      </div>
    </footer>
  );
};

