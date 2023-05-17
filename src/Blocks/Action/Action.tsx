import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/types";
import Button from "../../components/Button";
import imgStatistic from "../../assets/img/action_statistic.jpg";

import styles from "./action.module.scss";

export const Action = () => {
  const action = useSelector((state: RootState) => state.action);

  return (
    <section className={styles.action}>
      <div className={styles.flexWrapper}>
        <div className={styles.content}>
          <h2>
            Проводите <span>онлайн-трансляции</span>
          </h2>
          <p>{action.text}</p>
          <Button variant="contained" size="small">
            начать звонок
          </Button>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.imgWrapper}>
            <img src={imgStatistic} alt="statistic" />
          </div>
        </div>
      </div>
    </section>
  );
};
