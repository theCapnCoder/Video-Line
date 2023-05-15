import { FC } from "react";

import styles from "./actionButtons.module.scss";

export type Button = {
  text: string;
};

type Props = {
  buttons: Array<Button>;
};

export const ActionButtons: FC<Props> = ({ buttons }) => {
  return (
    <div className={styles.actionButtons}>
      <div className={styles.buttonsWrapper}>
        {buttons.map((button, id) => (
          <button key={id}>{button.text}</button>
        ))}
      </div>
    </div>
  );
};
