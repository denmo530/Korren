import React from 'react';
import styles from '@/styles/Header.module.css';

interface HeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, center }) => {
  return (
    <div style={center ? { textAlign: 'center' } : { textAlign: 'start' }}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Header;
