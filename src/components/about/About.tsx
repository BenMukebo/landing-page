import React from "react";
import image1 from '../../assets/images/golden-monkeys.png';

import styles from './about.module.scss';

export const About: React.FC<{}> = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.articles_wrapper}>
        <p className={styles.article_subtitle}>VAST & UNTOUCHED</p>
        <article className={styles.article}>
          <div className={styles.article_content}>
            <h2 className={styles.article_title}>Explore an untamed Zambia safari</h2>
            <p className={styles.article_text}>
              A safari in Zambia will see you travel from Livingstone, the country’s adventure capital where the Zambezi and Victoria Falls – or Mosi-oa-Tunya – provide endless thrills, to the exceptionally remote Busanga Plains in northern Kafue National Park. At 5.5 million acres, Kafue is one of the largest and oldest protected regions in Africa, and it is here you’ll thrill to encountering wildlife in the most natural, wild way.
            </p>
          </div>
          <div className={styles.article_img}>
            <img src={image1} alt="about-img1" />
          </div>
        </article>
      </div>
  </section>
  );
}
