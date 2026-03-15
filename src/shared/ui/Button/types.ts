export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}
