import React from "react";
import { motion } from "framer-motion"
// const Fade = require("react-reveal/Fade");

import styles from './contacts.module.scss';

export const Contacts: React.FC<{}> = () => {
  return (
    <section className={styles.contacts_section} id="contacts">
        <div className={styles.contacts_header}>
          <h2 className={styles.contacts_title}>Need some inspiration? </h2>
        </div>
      <div className={styles.contacts_wrapper}>
        <article className={styles.contact_content}>
          <p>
            Be inspired by the latest news from Wilderness. Subscribe to our newsletter.
          </p>
        </article>

        <form action="https://formspree.io/f/xnqlovnj" method="post" id="form">
          <div className={styles.input_wrapper}>
              <motion.div className={styles.input_div}>
                <input id="name" name="name" placeholder="Name" type="text" required />
              </motion.div>
              <motion.div className={styles.input_div}>
                <input id="email" name="email" placeholder="Email" type="email" required/>
              </motion.div>

          </div>
            <motion.div className={styles.input_div}>
              <textarea id="comments" name="comments" placeholder="Comment"
              // rows="5"
              ></textarea>
            </motion.div>
            <motion.div className={styles.btn_div}>
              <button type="submit" aria-label="keep_in_touch">
                Submit
              </button>
            </motion.div>
        </form>
      </div>
    </section>
  );
}
