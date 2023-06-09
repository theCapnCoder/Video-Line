import styles from "./main.module.scss";
import { useSelector } from "react-redux";
import { Logo } from "../../assets/img/Logo";
import { RootState } from "../../redux/store/types";
import Button from "../../components/Button";

import imgGirl from "../../assets/img/main_girl.jpg";
import imgMan from "../../assets/img/main_man.jpg";
import imgCircleWhite from "../../assets/img/circle_white.svg";
import imgCard from "../../assets/img/main_card.jpg";
import imgVideo from "../../assets/img/main_video.jpg";
import imgCircleYellow from "../../assets/img/circle_yellow.svg";
import ActionButtons from "./ActionButtons";

export const Main = () => {
  const { nav: navLinks, main, actionButtons } = useSelector((state: RootState) => state);
  const link = "#";

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div>
          <a href={link}>
            <Logo />
          </a>
        </div>

        <nav>
          <ul className={styles.menu}>
            {navLinks.map((link, id) => (
              <a key={id} href={link.link}>
                <li>{link.text}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.content}>
          <h1>{main.title}</h1>
          <h3>{main.text}</h3>
          <div className={styles.buttonsWrapper}>
            <Button variant="contained" size="small">
              начать звонок
            </Button>
            <Button variant="outlined" size="small">
              Конференция
            </Button>
          </div>
          <h4>{main.info}</h4>
        </div>

        <div className={styles.imagesWrapper}>
          <div className={styles.circleWhiteWrapper}>
            <img src={imgCircleWhite} alt="circle white" />
          </div>

          <div className={styles.girlWrapper}>
            <img src={imgGirl} alt="girl" />
          </div>

          <div className={styles.circlePurpleWrapper}></div>

          <div className={styles.manWrapper}>
            <img src={imgMan} alt="man" />
          </div>

          <div className={styles.videoWrapper}>
            <img src={imgVideo} alt="video" />
          </div>

          <div className={styles.circleYellowWrapper}>
            <img src={imgCircleYellow} alt="circle yellow" />
          </div>

          <div className={styles.listWrapper}>
            <img src={imgCard} alt="circle" />
          </div>
        </div>
      </div>

      <ActionButtons buttons={actionButtons}/>
    </main>
  );
};
