import React from 'react';
import { IconType } from 'react-icons';
import styles from '@/styles/SortingButton.module.css';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const SortingButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon
}) => {
  const buttonStyles = {
    backgroundColor: outline ? '#C8D2D1' : '#68904D',
    border: outline ? '1px #C8D2D1' : '1px solid #68904D',
    color: outline ? 'black' : 'white',
    padding: small ? '4px 0' : '12px',
    fontSize: small ? '8px' : '15px',
    fontWeight: small ? '200' : '550',
    borderWidth: small ? '1px' : '2px'
  };

  return (
    <button
      type="button"
      className={styles.btn}
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}>
      {Icon && <Icon size={24} className={styles.icon} />}
      {label}
    </button>
  );
};

export default SortingButton;
