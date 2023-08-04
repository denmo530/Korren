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
  const buttonStyles = {
    backgroundColor: outline ? 'white' : '#68904D',
    border: outline ? '1px solid black' : '1px solid #68904D',
    color: outline ? 'black' : 'white',
    padding: small ? '4px 0' : '12px',
    fontSize: small ? 'small' : 'large',
    fontWeight: small ? 'light' : 'semi-bold',
    borderWidth: small ? '1px' : '2px'
  };

  return (
    <button
      className={styles.btn}
      type="button"
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}>
      {Icon && <Icon size={24} className={styles.icon} />}
      {label}
    </button>
  );
};

export default Button;
