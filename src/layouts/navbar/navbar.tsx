import React from "react";

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineDribbble } from 'react-icons/ai';
import { BiPaperPlane, BiSearchAlt2 } from 'react-icons/bi';

import styles from './navbar.module.scss';

export const Navbar: React.FC<{}> = ( ) => {

  return (
    <nav className={styles.navbar}>
        <p className={styles.contact_numbers}>Call Now: +250 787 976 905 | +250 787 976 905</p>
        <div className={styles.contact_email_social_left}>
          <p className={styles.contact_email}>
            <span><BiPaperPlane/></span>
            Email: info@kawirasafaris.net.com
          </p>

          <p className={styles.social_media}>
            <span className={styles.follow}>Follow Us: </span>
            <a href="https://www.facebook.com/pages/category/Business-Service/SATEC-Congo-incubation-113625197074726/" title="facebook">
              <FaFacebookF/>
            </a>
            <a href="https://www.facebook.com/satecongo?mibextid=LQQJ4d" title="twitter">
              <AiOutlineTwitter/>
            </a>
          </p>

        </div>
    </nav> 
  )
}

// export default Navbar;
