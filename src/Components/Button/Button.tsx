import { FC } from "react";
import useClassNames from "../../hooks/useClassnames";
import Spinner from "../Spinner";
import styles from "./Button.module.scss";

type ButtonSize = "large" | "small";
type Types = "submit" | "button";
type Position = "default" | "end";
type ButtonColor = "primary" | "danger";

const sizeClassNameMap: Record<ButtonSize, string> = {
  large: styles.large,
  small: styles.small,
};

const positionClassNameMap: Record<Position, string> = {
  end: styles.position_end,
  default: styles.position_default,
};

const colorClassNameMap: Record<ButtonColor, string> = {
  primary: styles.primary,
  danger: styles.danger,
};

interface IButton {
  size: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (id: number) => void;
  children?: React.ReactNode;
  type?: Types;
  position?: Position;
  color?: ButtonColor;
  itemId?: number;
  className?: string;
}

const Button: FC<IButton> = ({
  className,
  size,
  disabled,
  loading,
  onClick,
  children,
  type,
  position,
  color,
  itemId,
}) => {
  const handleChange = () => {
    if (itemId) {
      onClick?.(itemId);
    }
  };

  return (
    <button
      type={type}
      onClick={handleChange}
      className={useClassNames(
        styles.button,
        sizeClassNameMap[size],
        positionClassNameMap[position ?? "default"],
        colorClassNameMap[color ?? "primary"],
        disabled && styles.disabled,
        loading && styles.loading,
        className
      )}
      disabled={disabled}
    >
      {loading && (
        <div data-testid="loading-icon" className={styles.loading_icon}>
          <Spinner />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
