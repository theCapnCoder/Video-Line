import React from "react";

import styles from "./footer.module.scss";
import { Vk } from "../../assets/img/Vk";
import { Facebook } from "../../assets/img/Facebook";
import { WhatsApp } from "../../assets/img/WhatsApp";
import { Tellegramm } from "../../assets/img/Tellegramm";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flexWrapper}>
        <h3>VIDEO LINE APP</h3>
        
        <div className={styles.iconsContainer}>
          <Facebook />
          <Vk />
          <WhatsApp />
          <Tellegramm />
        </div>
      </div>

      <p className="p_small">
        По всем вопросам обращайтесь support.vilineapp.com
      </p>
    </footer>
  );
};
