import React from 'react';
import styles from './MapModal.module.scss';

export const MapModal = () => {
  return (
    <div className={styles.placeDiv}>
      <div className={styles.placecard__container}>
        <div className={styles.placecard__left}>
          <p className={styles.placecard__business_name}>DarkInk Tattoo Studio</p>
          <p className={styles.placecard__info}>
           652 11th main road, 4th block, Jayanagar, Bangalore-560011
          </p>
          <a
            className={styles.placecard__view_large}
            target="_blank"
            rel="noreferrer"
            href="https://g.co/kgs/zbMLJRr"
            id="A_41"
          >
            View larger map
          </a>
        </div>
      </div>
    </div>
  );
};
