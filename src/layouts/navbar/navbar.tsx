import React from "react";

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineDribbble } from 'react-icons/ai';
import { TbBrandInstagram } from 'react-icons/tb';
import { BiPaperPlane } from 'react-icons/bi';

import styles from './navbar.module.scss';

export const Navbar: React.FC<{}> = ( ) => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.contact_info}>
       <p className={styles.contact_number}>+243 994 764 613</p>
       <p className={styles.contact_email}> 
       <span><BiPaperPlane/></span>
       info@sateccongo.com</p>
      </div>

      <ul className={styles.social_media_wrapper}>
        <li className={styles.social_media}>
          <a href="https://www.facebook.com/pages/category/Business-Service/SATEC-Congo-incubation-113625197074726/" title="facebook">
            <FaFacebookF/>
          </a>
        </li>
        <li className={styles.social_media}>
          <a href="https://www.facebook.com/satecongo?mibextid=LQQJ4d" title="twitter">
            <AiOutlineTwitter/>
          </a>
        </li>
        <li className={styles.social_media}>
          <a href="https://instagram.com/sateccongo?igshid=YWJhMjlhZTc=" title="instagram"><TbBrandInstagram/></a>
        </li>
        <li className={styles.social_media}>
          <a href="https://wa.me/+243971838655" title="whatsApp"><AiOutlineDribbble/></a>
        </li>
      </ul>
    </nav> 
  )
}

// export default Navbar;
