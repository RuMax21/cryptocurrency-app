import type { ButtonProps } from './types';
import styles from './Button.module.scss';

export const Button = ({
  className,
  children,
  disabled = false,
  onClick,
}: ButtonProps) => (
  <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
