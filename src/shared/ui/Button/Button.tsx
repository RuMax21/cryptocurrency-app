import type { ButtonProps } from "./types";

export const Button = ({className, children, disabled = false, onClick}: ButtonProps) => (
  <button
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
