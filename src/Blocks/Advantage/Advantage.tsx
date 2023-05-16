import React from "react";

import styles from "./advantage.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/types";
import Button from "../../components/Button";

import card2Photo from "../../assets/img/card_2_photo.png";
import card3Photo from "../../assets/img/card_3_photo.png";
import card3Mobile from "../../assets/img/card_3_mobile.png";

export const Advantage = () => {
  const cards = useSelector((state: RootState) => state.cards);

  const card1 = cards[0];
  const card2 = cards[1];
  const card3 = cards[2];

  return (
    <div className={styles.advantage}>
      <div className={classNames(styles.cardWrapper, styles.card1)}>
        <div className={styles.imgWrapper}></div>

        <div className={styles.content}>
          <h2>{card1.title}</h2>
          <p>{card1.text}</p>
          <Button variant="contained" size="small" color="primary">
            начать конференцию
          </Button>
        </div>
      </div>

      <div className={classNames(styles.cardWrapper, styles.card2)}>
        <div className={styles.content}>
          <h2>{card2.title}</h2>
          <p>{card2.text}</p>
          <Button variant="contained" size="small" color="primary">
            начать конференцию
          </Button>
        </div>

        <div className={styles.imgWrapper}>
          <img src={card2Photo} alt="chat" />
        </div>
      </div>

      <div className={classNames(styles.cardWrapper, styles.card3)}>
        <div className={styles.imgWrapper}>
          <img src={card3Mobile} alt="mobile" />
          <img src={card3Photo} alt="2 girls" />
        </div>

        <div className={styles.content}>
          <h2>{card3.title}</h2>
          <p>{card3.text}</p>
          <Button variant="contained" size="small" color="primary">
            начать звонок
          </Button>
          <Button variant="outlined" size="small" color="secondary">
            Конференция
          </Button>
        </div>
      </div>
    </div>
  );
};
