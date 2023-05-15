import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./button.module.scss";

type Props = {
  children: ReactNode;
  size: "small" | "medium";
  variant: "contained" | "outlined";
  color?: 'primary'
};

export const Button: FC<Props> = ({ children, size, variant, color }) => {
  return (
    <button
      className={classNames(styles.button, styles.button_extra, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.contained]: variant === "contained",
        [styles.outlined]: variant === "outlined",
        [styles.primary]: color === "primary",
      })}
    >
      {children}
    </button>
  );
};
