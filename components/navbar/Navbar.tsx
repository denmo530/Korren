import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import UserMenu from './UserMenu';

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className="font-semibold text-2xl">
        <Link style={{ textDecoration: 'none', color: 'black' }} href={{ pathname: '/' }}>
          Korren
        </Link>
      </h1>
      <UserMenu />
    </div>
  );
};

export default Navbar;
