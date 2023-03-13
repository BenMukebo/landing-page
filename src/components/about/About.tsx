import React from "react";
import image1 from '../../assets/images/gorilla_trek.png';
import image2 from '../../assets/images/about_us.png';


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
            Gorilla Trekking safaris are second to none. When we put together a trip for you, we do so with the excitement of our own personal experiences and drawing on our memories to help create your own ultimate wildlife adventure encounter of a lifetime. Every one of our team of professionals and highly experienced guides is totally dedicated to making your dreams come true.
            On our gorilla safaris in Uganda, Kawira Safaris can secure your tracking permit all year round (which not all tour operators can promise) and we are renowned for obtaining them quickly. We cover the Whole East Africa and with our extensive experience selling and leading tours either guided or Self drive            </p>
          </div>
          <div className={styles.article_img}>
            <img src={image1} alt="about-img1" />
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_content}>
            <h2 className={styles.article_title}>Discover the mighty Zambezi</h2>
            <p className={styles.article_text}>
            We have been guiding Gorilla Trekking Safaris in Uganda and Rwanda, as well Wildlife Adventures for the last 10 years. Our company is founded on a true passion for the magnificent and diverse wildlife that lives in the protected National Parks, Rain Forests, and open plains of East Africa. Backed by a very clear understanding of what it means to deliver first-class service.</p>
          </div>
          <div className={styles.article_img}>
            <img src={image2} alt="about-us" />
          </div>
        </article>
      </div>
  </section>
  );
}
