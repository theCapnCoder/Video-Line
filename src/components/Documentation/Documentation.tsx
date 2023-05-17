import React from "react";
import lg1 from "./img/lg1.jpg";
import lg2 from "./img/lg2.jpg";
import lg3 from "./img/lg3.jpg";
import lg4 from "./img/lg4.jpg";
import lg5 from "./img/lg5.jpg";

import styles from "./documentation.module.scss";

export const Documentation = () => {
  const link = "#";

  return (
    <div className={styles.doc}>
      <div className={styles.box_doc}>
        <a className={styles.button_popup_doc} href="#popup1_doc">
          Documantation
        </a>
      </div>

      <div id="popup1_doc" className={styles.overlay_doc}>
        <div className={styles.popup_doc}>
          <h2>Techologies: </h2>
          <h3>TypeScript, Redux, React, SCSS, HTML</h3>
          <h2>Responsive Layout: NO</h2>
          <h3>Adaptive Layout: 1440px </h3>
          <h4>Libraries: "gh-pages", "classnames" </h4>

          <div className={styles.buttonWrapper}>
            <a
              href="https://github.com/theCapnCoder"
              rel="noreferrer"
              target="_blank"
            >
              <button>Git Hub</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/file/n2aIWbnYghaSSs10escZeQ/%5BPublished%5D%5BRU%5D-%C2%ABVideo-Line-App%C2%BB?type=design&node-id=0-1"
            >
              <button>Figma</button>
            </a>
          </div>

          <a className={styles.close_doc} href={link}>
            &times;
          </a>
          <div className={styles.content_doc}>
            <div className={styles.divider}></div>
            <img src={lg1} alt="lg" />
            <img src={lg2} alt="lg" />
            <img src={lg3} alt="lg" />
            <img src={lg4} alt="lg" />
            <img src={lg5} alt="lg" />
            <div className={styles.divider}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
