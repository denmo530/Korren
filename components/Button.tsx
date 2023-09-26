import React from 'react';
import { IconType } from 'react-icons';
import styles from '@/styles/Button.module.css';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon
}) => {
  return (
    <button
      className={`relative rounded-lg w-full cursor-pointer transition-all bg-secondary p-3 text-lg  font-semibold border-2 border-secondary ${
        outline === true
          ? 'bg-white border-black text-black hover:opacity-70'
          : 'hover:text-secondary hover:bg-white  duration-500 text-white'
      } ${small === true && 'py-1 px-0 text-sm font-light border-1'}
      `}
      type="button"
      onClick={onClick}
      disabled={disabled}>
      {Icon && <Icon size={24} className={styles.icon} />}
      {label}
    </button>
  );
};

export default Button;
