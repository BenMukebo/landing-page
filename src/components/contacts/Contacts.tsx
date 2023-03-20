import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { motion } from "framer-motion"

import styles from './contacts.module.scss';

export const Contacts: React.FC<{}> = () => {
  return (
    <section className={styles.contacts_section} id="contacts">
      {/* <div className={styles.contacts_header}>
        <h2 className={styles.contacts_title}>Need some inspiration? </h2>
      </div> */}
      <div className={styles.contacts_wrapper}>
        <article className={styles.contact_content}>
        <div className={styles.contacts_header}>
          <h2 className={styles.contacts_title}>Need some <br /> inspiration? </h2>
        </div>
          <p className={styles.contacts_text}>
            Be inspired by the latest news from Wilderness. Subscribe to our newsletter.
          </p>
        </article>

        <form action="https://formspree.io/f/xnqlovnj" method="post" id="form">
          <div className={styles.input_wrapper}>
              <div className={styles.input_div}>
                <input id="name" name="first_name" placeholder="First name" type="text" required />
              </div>
              <div className={styles.input_div}>
                <input id="name" name="last_name" placeholder="Last name" type="text" required/>
              </div>
          </div>
          <div className={styles.input_div}>
              <input id="email" name="email" placeholder="Email" type="email" required/>
          </div>
          <div className={styles.input_div}>
            <textarea id="comments" name="comments" placeholder="Comment"
            // rows="5"
            ></textarea>
          </div>
          <div className={styles.btn_div}>
            <button type="submit" aria-label="keep_in_touch">
              <HiArrowNarrowRight />
              <p>SUBMIT</p>          
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
