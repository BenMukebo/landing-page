import React, { useEffect } from "react";
import image1 from '../../assets/images/gorilla_trek.webp';
import image2 from '../../assets/images/gorilla2.webp';
import image3 from '../../assets/images/gorillar3.webp';
import image4 from '../../assets/images/chimpaz.webp';


import styles from './gorilla.module.scss';

import "aos/dist/aos.css";
import AOS from 'aos';

export const Gorillar: React.FC<{}> = () => {

  useEffect(()=>{
    AOS.init({duration: 2500});
    AOS.refresh();
  },[]);

  return (
    <section className={styles.about_section} id="about">
      <div className={styles.articles_wrapper}>
        <h4 className={styles.article_sub_title}>VAST & UNTOUCHED</h4>
        <article className={styles.article}>
          <div className={styles.article_content} data-aos="fade-right">
            <h2 className={styles.article_title}>Uganda Gorilla Trek Holiday - Flying Safari</h2>
            <p className={styles.article_text}>
            Endangered mountain gorillas are the star attractions in this adventurous safari to Uganda. Venture to the lush Bwindi Impenetrable Forest to track and observe the habituated primates.
            </p>
          </div>
          <div className={styles.article_img} data-aos="fade-up">
            <img src={image1} alt="about-img1" />
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_content} data-aos="fade-left">
            <h2 className={styles.article_title}>Rwanda Gorilla Safari</h2>
            <p className={styles.article_text}>
            Follow in the footsteps of late activist Dian Fossey and observe the “Gorillas in the Mist” on this extraordinary Rwanda gorilla trekking and safari tour found in Volcanoes National Park located in the northwest of Rwanda
            </p>
          </div>
          <div className={styles.article_img} data-aos="fade-down">
            <img src={image2} alt="about-img2" />
          </div>
        </article>
      </div>
      <div className={styles.line_brake}>
        <h1>Wild home</h1>
      </div>
      <div className={styles.articles_wrapper}>
        <article className={styles.article}>
          <div className={styles.article_content} data-aos="fade-right">
            <h2 className={styles.article_title}>Pearl Of Africa Safari</h2>
            <p className={styles.article_text}>
            Endangered mountain gorillas and intriguing Kibale chimpanzees are the star attractions in this adventurous safari to Uganda. Venture to the lush green Kibale Forest, Queen Elizabeth National Park and Bwindi Impenetrable Forest to track and observe the habituated primates</p>
          </div>
          <div className={styles.article_img} data-aos="fade-up">
            <img src={image3} alt="about-img3" />
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_content} data-aos="fade-left">
            <h2 className={styles.article_title}>Primates Safari Uganda</h2>
            <p className={styles.article_text}>
            Endangered mountain gorillas and intriguing chimpanzees are the star attractions in this adventurous safari to Uganda. Venture to the lush green Kibale Forest, Queen Elizabeth National Park and Bwindi Impenetrable Forest to track and observe the habituated primates</p>
          </div>
          <div className={styles.article_img} data-aos="fade-down">
            <img src={image4} alt="about-img4" />
          </div>
        </article>
      </div>
      {/* <article className={styles.article}>
        <div className={styles.article_content}>
          <h2 className={styles.article_title}>
             glance</h2>
          <p className={styles.article_text}>
            Going off the beaten track comes with questions. When is the best season to view wildlife in Zambia? How cold does it get at night and what languages are spoken? To help you prepare for your journey, we have put together a few keys facts to encourage your adventurous spirit.
          </p>
          </div>
        <div className={styles.article_img}>
          <img src={image2} alt="about-us" />
        </div>
        </article> */}
  </section>
  );
}
